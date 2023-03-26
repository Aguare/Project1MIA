import { Injectable } from "@angular/core";
import { User } from "../Entitys/User";
import { Router } from "@angular/router";
import { StorageService } from "./Storage/storage.service";

@Injectable({
  providedIn: "root",
})
export class RedirectService {
  user: User | null = null;

  constructor(private redirect: Router, private storage: StorageService) {}

  redirectPage(address: string) {
    this.redirect.navigate([address]);
  }

  redirectLogin() {
    this.user = JSON.parse(`${this.storage.get("User")}`);
    switch (this.user?.role) {
      case "Admin":
        this.redirectPage("/Admin");
        break;
      case "Vendedor":
        this.redirectPage("/Seller");
        break;
      case "Inventario":
        this.redirectPage("/Inventory");
        break;
      case "Bodega":
        this.redirectPage("/Cellar");
        break;
      default:
        this.redirectPage("/Login");
        break;
    }
  }
}
