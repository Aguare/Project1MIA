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
import { MoveProduct } from "../Entitys/MoveProduct";
import { Sale } from "../Entitys/Sale";
import { SaleGroup } from "../Entitys/SaleGroup";
import { ListProducts } from "../Entitys/ListProducts";
import { Branch } from "../Entitys/Branch";
import { User1 } from "../Entitys/User1";

@Injectable({
  providedIn: "root",
})
export class ConsultsService {
  constructor(private connection: HttpClient) {}

  validateUser(user: User): Observable<User> {
    return this.connection.post<User>(Back.Base + "RegisterUser", user);
  }

  registerUser(user: User1): Observable<User1> {
    return this.connection.post<User1>(Back.Base + "Users/RegisterUser", user);
  }

  getUser(userName: String): Observable<User> {
    return this.connection.get<User>(
      Back.Base + "GetUser?username=" + userName
    );
  }

  addUser(user: User): Observable<Alert> {
    return this.connection.post<Alert>(Back.Base + "AddUser", user);
  }

  updateUser(user: User): Observable<Alert> {
    return this.connection.put<Alert>(Back.Base + "UpdateUser", user);
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

  searchClientNit(nit: String): Observable<Client[]> {
    return this.connection.get<Client[]>(
      Back.Base + "SearchClientNit?nit=" + nit
    );
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

  getInventoryByIdBranchAndIdProduct(
    idBranch: number,
    idProduct: number
  ): Observable<Inventory> {
    return this.connection.get<Inventory>(
      Back.Base +
        "GetProductByBranchAndProductId?idBranch=" +
        idBranch +
        "&idProduct=" +
        idProduct
    );
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

  moveProducts(move: MoveProduct): Observable<Alert> {
    return this.connection.put<Alert>(Back.Base + "MoveProducts", move);
  }

  addInventory(inventory: Inventory): Observable<Alert> {
    return this.connection.post<Alert>(Back.Base + "AddInventory", inventory);
  }

  updateInventory(inventory: Inventory): Observable<Alert> {
    return this.connection.put<Alert>(Back.Base + "UpdateInventory", inventory);
  }

  getLastSaleByNit(nit: String): Observable<Sale> {
    return this.connection.get<Sale>(Back.Base + "GetLastSaleByNit?nit=" + nit);
  }

  addSale(in2: SaleGroup): Observable<Alert> {
    return this.connection.post<Alert>(Back.Base + "AddSale", in2);
  }

  getBranchId(idBranch: number): Observable<Branch> {
    return this.connection.get<Branch>(
      Back.Base + "GetBranchId?id=" + idBranch
    );
  }

  getReport1(): Observable<any[]> {
    return this.connection.get<any[]>(Back.Base + "Report1");
  }

  getReport2(): Observable<any[]> {
    return this.connection.get<any[]>(Back.Base + "Report2");
  }

  getReport3(): Observable<any[]> {
    return this.connection.get<any[]>(Back.Base + "Report3");
  }

  getReport4(): Observable<any[]> {
    return this.connection.get<any[]>(Back.Base + "Report4");
  }

  getReport5(): Observable<any[]> {
    return this.connection.get<any[]>(Back.Base + "Report5");
  }

  getReport6(): Observable<any[]> {
    return this.connection.get<any[]>(Back.Base + "Report6");
  }

  getReport9(id: number): Observable<any[]> {
    return this.connection.get<any[]>(Back.Base + "Report9?id=" + id);
  }

  getReport10(id: number): Observable<any[]> {
    return this.connection.get<any[]>(Back.Base + "Report10?id=" + id);
  }
}
