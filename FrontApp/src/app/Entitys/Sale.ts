export class Sale {
  idSale: number;
  date: Date;
  total: number;
  idBranch: number;
  dpi: number;
  nit: string;

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
    this.dpi = DPI;
    this.nit = NIT;
  }
}
