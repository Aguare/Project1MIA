import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Inventory } from "src/app/Entitys/Inventory";
import { ListProducts } from "src/app/Entitys/ListProducts";
import { User } from "src/app/Entitys/User";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  private storage: Storage;

  constructor() {
    this.storage = localStorage;
  }

  add(data: any, key: string) {
    this.storage.setItem(key, JSON.stringify(data));
  }

  clear() {
    this.storage.clear();
  }

  get(key: string) {
    return this.storage.getItem(key);
  }

  getListProducts(): ListProducts[] {
    return JSON.parse(`${this.get("list_products")}`);
  }

  saveListProducts(list_products: ListProducts[]) {
    this.add(list_products, "list_products");
  }

  saveListInventory(list_inventory: Inventory[]) {
    this.add(list_inventory, "list_inventory");
  }

  getListInventory(): Inventory[] {
    return JSON.parse(`${this.get("list_inventory")}`);
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }

  getUser(): User {
    return JSON.parse(`${this.get("User")}`);
  }
}
