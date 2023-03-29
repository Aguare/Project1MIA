import { Component } from "@angular/core";
import { Alert } from "src/app/Entitys/Alert";
import { Employee } from "src/app/Entitys/Employee";
import { ConsultsService } from "src/app/Services/Consults.service";

@Component({
  selector: "app-list-employees",
  templateUrl: "./list-employees.component.html",
  styleUrls: ["./list-employees.component.scss"],
})
export class ListEmployeesComponent {
  employees: Employee[] | null = null;
  alert: Alert = new Alert("", "", "", false);

  constructor(private service: ConsultsService) {
    this.service.getAllEmployees().subscribe(
      (correct) => {
        this.employees = correct;
      },
      (error) => {
        this.alert = new Alert(
          "No se pueden obtener los empleados",
          "Error",
          "danger",
          true
        );
      }
    );
  }
}
