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

@Injectable({
  providedIn: "root",
})
export class ConsultsService {
  constructor(private connection: HttpClient) {}

  validateUser(user: User): Observable<User> {
    return this.connection.post<User>(Back.Base + "Login", user);
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

  getReport1(): Observable<ListProducts[]> {
    return this.connection.get<ListProducts[]>(Back.Base + "Report1");
  }
}
