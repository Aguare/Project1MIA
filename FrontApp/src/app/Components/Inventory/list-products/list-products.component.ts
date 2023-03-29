import { Component } from "@angular/core";
import { Alert } from "src/app/Entitys/Alert";
import { Inventory } from "src/app/Entitys/Inventory";
import { Product } from "src/app/Entitys/Product";
import { User } from "src/app/Entitys/User";
import { ConsultsService } from "src/app/Services/Consults.service";
import { StorageService } from "src/app/Services/Storage/storage.service";

@Component({
  selector: "app-list-products",
  templateUrl: "./list-products.component.html",
  styleUrls: ["./list-products.component.scss"],
})
export class ListProductsComponent {
  products: Inventory[] | null = null;
  alert: Alert = new Alert("", "", "", false);
  idBranch: number = 1;
  user: User;

  constructor(
    private service: ConsultsService,
    private storage: StorageService
  ) {
    this.user = this.storage.getUser();
    this.service
      .getEmployeeUserName(this.user.username)
      .subscribe((correct) => {
        this.user.fk_dpi = correct;
      });
    this.idBranch = this.user.fk_dpi.branch.idBranch;
    this.chargeProducts();
  }

  chargeProducts() {
    if (this.idBranch == 5) {
      this.service.getAllProducts().subscribe(
        (correct) => {
          this.products = correct;
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
    } else {
      this.service.getAllProductsByBranch(this.idBranch).subscribe(
        (correct) => {
          this.products = correct;
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
}
