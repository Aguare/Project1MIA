import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { User } from "../Entitys/User";
import { Observable } from "rxjs";
import { Back } from "../Entitys/Back";
import { Client } from "../Entitys/Client";
import { Alert } from "../Entitys/Alert";
import { Product } from "../Entitys/Product";
import { Inventory } from "../Entitys/Inventory";
import { Employee } from "../Entitys/Employee";

@Injectable({
  providedIn: "root",
})
export class ConsultsService {
  constructor(private connection: HttpClient) {}

  validateUser(user: User): Observable<User> {
    return this.connection.post<User>(Back.Base + "Login", user);
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

  getProduct(idProduct: number): Observable<Product> {
    return this.connection.get<Product>(
      Back.Base + "GetProductId?idProduct=" + idProduct
    );
  }

  updateProduct(product: Product): Observable<Alert> {
    return this.connection.put<Alert>(Back.Base + "UpdateProduct", product);
  }

  addProduct(product: Product): Observable<Alert> {
    return this.connection.post<Alert>(Back.Base + "AddProduct", product);
  }

  getAllProducts(): Observable<Inventory[]> {
    return this.connection.get<Inventory[]>(Back.Base + "GetAllProducts");
  }

  getAllProductsByBranch(idBranch: number): Observable<Inventory[]> {
    return this.connection.get<Inventory[]>(
      Back.Base + "GetAllProductsByBranch?idBranch=" + idBranch
    );
  }

  getEmployeeUserName(userName: String): Observable<Employee> {
    return this.connection.get<Employee>(
      Back.Base + "GetEmployeeUserName?username=" + userName
    );
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.connection.get<Employee[]>(Back.Base + "GetAllEmployee");
  }

  getEmployeeDPI(dpi: number): Observable<Employee> {
    return this.connection.get<Employee>(
      Back.Base + "GetEmployeeDPI?dpi=" + dpi
    );
  }

  addEmployee(employee: Employee): Observable<Alert> {
    return this.connection.post<Alert>(Back.Base + "AddEmployee", employee);
  }

  updateEmployee(employee: Employee): Observable<Alert> {
    return this.connection.put<Alert>(Back.Base + "UpdateEmployee", employee);
  }

  searchProductByBranchAndProductName(
    idBranch: number,
    productName: String
  ): Observable<Inventory[]> {
    return this.connection.get<Inventory[]>(
      Back.Base +
        "SearchProduct?idBranch=" +
        idBranch +
        "&product=" +
        productName
    );
  }
}
