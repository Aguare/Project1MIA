import { ListProducts } from "./ListProducts";
import { Sale } from "./Sale";

export class SaleGroup {
  listProducts: ListProducts[];
  sale: Sale;

  constructor(listProducts: ListProducts[], sale: Sale) {
    this.listProducts = listProducts;
    this.sale = sale;
  }
}
