import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { User } from "../Entitys/User";
import { Observable } from "rxjs";
import { Back } from "../Entitys/Back";

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
}
