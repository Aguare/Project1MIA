import { Component, OnInit } from "@angular/core";
import { Alert } from "src/app/Entitys/Alert";
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
  list_inventory: Inventory[] = [];
  confirmSale: boolean = false;
  alertMessage: Alert = new Alert("", "", "", false);

  constructor(
    private consult: ConsultsService,
    private storage: StorageService
  ) {
    let list = this.storage.getListProducts();
    let listInventory = this.storage.getListInventory();
    if (list != null && listInventory != null) {
      this.list_products = list;
      this.listInventory = listInventory;
      this.calculateTotal();
    }
  }

  ngOnInit(): void {
    this.consult.getEmployeeUserName(this.user.username).subscribe((data) => {
      this.user.fk_dpi = data;
    });
  }

  saveLists() {
    this.storage.saveListProducts(this.list_products);
    this.storage.saveListInventory(this.listInventory);
    this.calculateTotal();
  }

  addItem(add: Inventory) {
    if (!this.existsItem(add)) {
      this.listInventory.push(add);
      this.list_products.push(
        new ListProducts(
          0,
          0,
          add.product,
          1,
          add.product.price,
          this.user.fk_dpi.branch.idBranch
        )
      );
    }
    this.saveLists();
  }

  removeItem(add: ListProducts) {
    this.list_products.forEach((item, index) => {
      if (item.idProduct.idProduct == add.idProduct.idProduct) {
        this.list_products.splice(index, 1);
      }
    });
    this.listInventory.forEach((item, index) => {
      if (item.product.idProduct == add.idProduct.idProduct) {
        this.listInventory.splice(index, 1);
      }
    });
    this.saveLists();
  }

  calculateTotal() {
    this.total = 0;
    this.list_products.forEach((item) => {
      this.total += item.subTotal;
    });
  }

  addValue(add: Product, value: any) {
    this.list_products.forEach((item) => {
      if (item.idProduct.idProduct == add.idProduct) {
        item.quantity = value.target.value;
        item.subTotal = item.quantity * item.idProduct.price;
      }
    });
    this.calculateTotal();
    this.storage.saveListProducts(this.list_products);
  }

  existsItem(add: Inventory): boolean {
    let exists = false;
    this.list_products.forEach((item) => {
      if (item.idProduct.idProduct == add.product.idProduct) {
        exists = true;
      }
    });
    return exists;
  }

  getValueAmount(idProduct: number): number {
    let value = 0;
    this.list_products.forEach((item) => {
      if (item.idProduct.idProduct == idProduct) {
        value = item.quantity;
      }
    });
    return value;
  }

  getMax(idProduct: number): number {
    let max = 0;
    if (this.listInventory == null) {
      return 0;
    }
    this.listInventory.forEach((item) => {
      if (item.product.idProduct == idProduct) {
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

  makeSale() {
    this.confirmSale = true;
  }

  cancelSale() {
    this.list_products = [];
    this.listInventory = [];
    this.confirmSale = false;
    this.storage.saveListProducts(this.list_products);
    this.storage.saveListInventory(this.listInventory);
    this.calculateTotal();
  }

  messageEmit(alert: Alert) {}
}
