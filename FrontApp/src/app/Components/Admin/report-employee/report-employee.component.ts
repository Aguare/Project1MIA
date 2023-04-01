import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Employee } from "src/app/Entitys/Employee";
import { ConsultsService } from "src/app/Services/Consults.service";

@Component({
  selector: "app-report-employee",
  templateUrl: "./report-employee.component.html",
  styleUrls: ["./report-employee.component.scss"],
})
export class ReportEmployeeComponent {
  title = "Top 3 empleados con más ventas";
  elements: any[] = [];
  employee_list: Employee[] = [];
  option: number = 0;

  constructor(private service: ConsultsService, private route: ActivatedRoute) {
    let num = this.route.snapshot.paramMap.get("num");
    switch (num) {
      case "5":
        this.service.getReport5().subscribe((data) => {
          data.forEach((element) => {
            this.service.getEmployeeDPI(element[0]).subscribe((data) => {
              this.employee_list.push(data);
            });
          });
          this.elements = data;
          this.title = "Top 3 Empleados con más ventas";
          this.option = 5;
        });
        break;
      case "6":
        this.service.getReport6().subscribe((data) => {
          data.forEach((element) => {
            this.service.getEmployeeDPI(element[0]).subscribe((data) => {
              this.employee_list.push(data);
            });
          });
          this.elements = data;
          this.title = "Top 3 Empleados con más ingresos";
          this.option = 6;
        });
        break;
    }
  }

  getSales(dpi: number): number {
    let total = 0;
    this.elements.forEach((element) => {
      if (element[0] == dpi) {
        total = element[1];
      }
    });
    return total;
  }
}
