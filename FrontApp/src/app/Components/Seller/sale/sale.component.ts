import { Component, OnInit } from "@angular/core";
import { Inventory } from "src/app/Entitys/Inventory";
import { ListProducts } from "src/app/Entitys/ListProducts";
import { Product } from "src/app/Entitys/Product";
import { User } from "src/app/Entitys/User";
import { ConsultsService } from "src/app/Services/Consults.service";
import { StorageService } from "src/app/Services/Storage/storage.service";

@Component({
  selector: "app-sale",
  templateUrl: "./sale.component.html",
  styleUrls: ["./sale.component.scss"],
})
export class SaleComponent implements OnInit {
  search: string = "";
  inventory: Inventory[] | null = null;
  user: User = this.storage.getUser();
  listInventory: Inventory[] = [];
  total: number = 0;
  list_products: ListProducts[] = [];

  constructor(
    private consult: ConsultsService,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.consult.getEmployeeUserName(this.user.username).subscribe((data) => {
      this.user.fk_dpi = data;
    });
  }

  addItem(add: Inventory) {
    this.list_products.push(
      new ListProducts(0, 0, add.product, 1, add.product.price)
    );
  }

  addValue(add: Product, value: any) {
    let val = value.target.value;
    this.listInventory.forEach((item) => {
      if (item.product.idProduct == add.idProduct) {
        item.quantity = val;
        this.total = 0;
      }
    });
    this.listInventory.forEach((item) => {
      this.total += item.product.price * item.quantity;
    });
  }

  existsItem(add: Inventory): boolean {
    let exists = false;
    this.listInventory.forEach((item) => {
      if (item.product.idProduct == add.product.idProduct) {
        exists = true;
      }
    });
    return exists;
  }

  getMax(idProduct: Product): number {
    let max = 0;
    if (this.inventory == null) {
      return 0;
    }
    this.inventory.forEach((item) => {
      if (item.product.idProduct == idProduct.idProduct) {
        max = item.quantity;
      }
    });
    return max;
  }

  searchProduct() {
    if (this.user != null) {
      this.consult
        .searchProductByBranchAndProductName(
          this.user.fk_dpi.branch.idBranch,
          this.search
        )
        .subscribe((data) => {
          this.inventory = data;
        });
    }
  }
}
