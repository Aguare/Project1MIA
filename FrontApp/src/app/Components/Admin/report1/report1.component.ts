import { Component } from "@angular/core";
import { ListProducts } from "src/app/Entitys/ListProducts";
import { ConsultsService } from "src/app/Services/Consults.service";

@Component({
  selector: "app-report1",
  templateUrl: "./report1.component.html",
  styleUrls: ["./report1.component.scss"],
})
export class Report1Component {
  list_report1: ListProducts[] = [];

  constructor(private service: ConsultsService) {
    this.service.getReport1().subscribe((data) => {
      this.list_report1 = data;
    });
  }
}
