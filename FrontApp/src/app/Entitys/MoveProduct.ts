import { Inventory } from "./Inventory";

export class MoveProduct {
  entry: Inventory;
  amountMove: number;
  idBranch: number;

  constructor(entry: Inventory, amountMove: number, idBranch: number) {
    this.entry = entry;
    this.amountMove = amountMove;
    this.idBranch = idBranch;
  }
}
