import { Product } from "./Product";

export class ListProducts {
  idListProducts: number;
  idSale: number;
  idProduct: Product;
  quantity: number;
  subtotal: number;
  idBranch: number;

  constructor(
    idLIstProducts: number,
    idSale: number,
    idProduct: Product,
    quantity: number,
    subTotal: number,
    idBranch: number
  ) {
    this.idListProducts = idLIstProducts;
    this.idSale = idSale;
    this.idProduct = idProduct;
    this.quantity = quantity;
    this.subtotal = subTotal;
    this.idBranch = idBranch;
  }
}
