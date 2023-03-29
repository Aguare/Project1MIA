import { Product } from "./Product";

export class ListProducts {
  idListProducts: number;
  idSale: number;
  idProduct: Product;
  quantity: number;
  subtotal: number;

  constructor(
    idListProducts: number,
    idSale: number,
    idProduct: Product,
    quantity: number,
    subtotal: number
  ) {
    this.idListProducts = idListProducts;
    this.idSale = idSale;
    this.idProduct = idProduct;
    this.quantity = quantity;
    this.subtotal = subtotal;
  }
}
