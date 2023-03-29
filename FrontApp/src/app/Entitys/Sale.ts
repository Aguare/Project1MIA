export class Sale {
  idSale: number;
  date: Date;
  total: number;
  idBranch: number;
  DPI: number;
  NIT: string;

  constructor(
    idSale: number,
    date: Date,
    total: number,
    idBranch: number,
    DPI: number,
    NIT: string
  ) {
    this.idSale = idSale;
    this.date = date;
    this.total = total;
    this.idBranch = idBranch;
    this.DPI = DPI;
    this.NIT = NIT;
  }
}
