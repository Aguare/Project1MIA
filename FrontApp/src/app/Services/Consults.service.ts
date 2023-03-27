import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { User } from "../Entitys/User";
import { Observable } from "rxjs";
import { Back } from "../Entitys/Back";
import { Client } from "../Entitys/Client";
import { Alert } from "../Entitys/Alert";

@Injectable({
  providedIn: "root",
})
export class ConsultsService {
  constructor(private connection: HttpClient) {}

  validateUser(user: User): Observable<User> {
    return this.connection.post<User>(Back.Base + "Login", user);
  }

  getUser(user: String, password: String): Observable<User> {
    return this.connection.post<User>(Back.Base + "GetUser", user);
  }

  addClient(client: Client): Observable<Alert> {
    return this.connection.post<Alert>(Back.Base + "AddClient", client);
  }

  getAllClients(): Observable<Client[]> {
    return this.connection.get<Client[]>(Back.Base + "GetAllClients");
  }

  getClientNit(nit: String): Observable<Client> {
    return this.connection.get<Client>(Back.Base + "GetClientNit?nit=" + nit);
  }

  updateClient(client: Client): Observable<Alert> {
    return this.connection.put<Alert>(Back.Base + "UpdateClient", client);
  }
}
