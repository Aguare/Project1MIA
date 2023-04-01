import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ListProducts } from "src/app/Entitys/ListProducts";
import { Product } from "src/app/Entitys/Product";
import { ConsultsService } from "src/app/Services/Consults.service";

@Component({
  selector: "app-report1",
  templateUrl: "./report1.component.html",
  styleUrls: ["./report1.component.scss"],
})
export class Report1Component {
  title: string = "";
  list_report1: Product[] = [];
  list_report2: Product[] = [];
  list_report3: Product[] = [];
  elements: any[] = [];
  elements2: any[] = [];
  elements3: any[] = [];
  option: number = 0;

  constructor(
    private service: ConsultsService,
    private routed: ActivatedRoute
  ) {
    let report = this.routed.snapshot.paramMap.get("num");
    if (report != null) {
      switch (report) {
        case "1":
          this.service.getReport1().subscribe((data) => {
            data.forEach((element) => {
              this.service.getProduct(element[0]).subscribe((res) => {
                this.list_report1.push(res);
              });
            });
            this.elements = data;
          });
          this.title = "Top 10 Productos más vendidos";
          break;
        case "9":
          this.option = 9;
          this.service.getReport9(1).subscribe((data) => {
            data.forEach((element) => {
              this.service.getProduct(element[0]).subscribe((res) => {
                this.list_report1.push(res);
              });
            });
            this.elements = data;
          });
          this.service.getReport9(2).subscribe((data) => {
            data.forEach((element) => {
              this.service.getProduct(element[0]).subscribe((res) => {
                this.list_report2.push(res);
              });
            });
            this.elements2 = data;
          });
          this.service.getReport9(3).subscribe((data) => {
            data.forEach((element) => {
              this.service.getProduct(element[3]).subscribe((res) => {
                this.list_report1.push(res);
              });
            });
            this.elements3 = data;
          });
          this.title = "Top 5 Productos más vendidos por Sucursal";
          break;
        case "10":
          this.option = 10;
          this.service.getReport10(1).subscribe((data) => {
            data.forEach((element) => {
              this.service.getProduct(element[1]).subscribe((res) => {
                this.list_report1.push(res);
              });
            });
            this.elements = data;
          });
          this.service.getReport10(2).subscribe((data) => {
            data.forEach((element) => {
              this.service.getProduct(element[1]).subscribe((res) => {
                this.list_report2.push(res);
              });
            });
            this.elements2 = data;
          });
          this.service.getReport10(2).subscribe((data) => {
            data.forEach((element) => {
              this.service.getProduct(element[1]).subscribe((res) => {
                this.list_report3.push(res);
              });
            });
            this.elements3 = data;
          });
          this.title = "Top 5 Productos con más ingresos por Sucursal";
          break;
        default:
          break;
      }
    }
  }

  getAmount(id: number, op: number) {
    let amount = 0;
    let l = this.elements;
    switch (op) {
      case 2:
        l = this.elements2;
        break;
      case 3:
        l = this.elements3;
        break;
    }
    l.forEach((element) => {
      console.log(element);
      if (this.option == 10) {
        if (element[1] == id) {
          amount = element[2];
        }
      } else if (element[0] == id) {
        amount = element[1];
      }
    });
    return amount;
  }
}
