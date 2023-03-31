export class Product {
  idProduct: number;
  name_p: string;
  price: number;
  description: string;

  constructor(
    idProduct: number,
    name_p: string,
    price: number,
    description: string
  ) {
    this.idProduct = idProduct;
    this.name_p = name_p;
    this.price = price;
    this.description = description;
  }
}
