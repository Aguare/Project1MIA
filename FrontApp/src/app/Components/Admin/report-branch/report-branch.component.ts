import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Branch } from "src/app/Entitys/Branch";
import { ConsultsService } from "src/app/Services/Consults.service";

@Component({
  selector: "app-report-branch",
  templateUrl: "./report-branch.component.html",
  styleUrls: ["./report-branch.component.scss"],
})
export class ReportBranchComponent {
  title: string = "Reporte de ventas por sucursal";
  branch_list: Branch[] = [];
  elements: any[] = [];
  option: number = 0;

  constructor(
    private service: ConsultsService,
    private routed: ActivatedRoute
  ) {
    let number = this.routed.snapshot.paramMap.get("num");
    switch (number) {
      case "3":
        this.service.getReport3().subscribe((data) => {
          data.forEach((element) => {
            this.service.getBranchId(element[0]).subscribe((data) => {
              this.branch_list.push(data);
            });
          });
          this.elements = data;
          this.title = "Top 3 Sucursales con más ventas";
          this.option = 3;
        });
        break;
      case "4":
        this.service.getReport4().subscribe((data) => {
          data.forEach((element) => {
            this.service.getBranchId(element[0]).subscribe((data) => {
              this.branch_list.push(data);
            });
          });
          this.elements = data;
          this.title = "Top 3 Sucursales con más ingresos";
          this.option = 4;
        });
        break;
      default:
        this.title = "El reporte no existe";
        break;
    }
  }

  getSales(idBranch: number): number {
    let total = 0;
    this.elements.forEach((element) => {
      if (element[0] == idBranch) {
        total = element[1];
      }
    });
    return total;
  }
}
