import { Branch } from "./Branch";
import { Product } from "./Product";

export class Inventory {
  product: Product;
  branch: Branch;
  quantity: number;

  constructor(product: Product, branch: Branch, quantity: number) {
    this.product = product;
    this.branch = branch;
    this.quantity = quantity;
  }
}
