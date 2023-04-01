import { AfterViewInit, Component } from "@angular/core";
import { Client } from "src/app/Entitys/Client";
import { Sale } from "src/app/Entitys/Sale";
import { ConsultsService } from "src/app/Services/Consults.service";

@Component({
  selector: "app-report2",
  templateUrl: "./report2.component.html",
  styleUrls: ["./report2.component.scss"],
})
export class Report2Component implements AfterViewInit {
  client_list: Client[] = [];
  sale_list: Sale[] = [];

  constructor(private service: ConsultsService) {
    this.service.getReport2().subscribe((data) => {
      data.forEach((element) => {
        this.sale_list.push(
          new Sale(0, new Date(), element[1], 0, 0, element[0])
        );
      });
      this.sale_list.forEach((element) => {
        this.service.getClientNit(element.nit).subscribe((data) => {
          this.client_list.push(data);
        });
      });
    });
  }

  ngAfterViewInit(): void {}

  getAmount(nit: string): any {
    let total = 0;
    this.sale_list.forEach((element) => {
      if (element.nit == nit) {
        total = element.total;
      }
    });
    return total;
  }
}
