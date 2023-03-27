import { Component } from "@angular/core";
import { Alert } from "src/app/Entitys/Alert";
import { Client } from "src/app/Entitys/Client";
import { ConsultsService } from "src/app/Services/Consults.service";

@Component({
  selector: "app-list-clients",
  templateUrl: "./list-clients.component.html",
  styleUrls: ["./list-clients.component.scss"],
})
export class ListClientsComponent {
  clients: Client[] | null = null;
  alert: Alert = new Alert("", "", "", false);

  constructor(private service: ConsultsService) {
    this.service.getAllClients().subscribe(
      (correct) => {
        this.clients = correct;
      },
      (error) => {
        this.alert = new Alert(
          "No se pueden obtener los clientes",
          "Error",
          "danger",
          true
        );
      }
    );
  }
}
