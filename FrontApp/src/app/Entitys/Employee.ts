import { Branch } from "./Branch";

export class Employee {
  dpi: number;
  names: String;
  lastNames: String;
  dateBirthday: Date;
  branch: Branch;

  constructor(
    dpi: number,
    names: String,
    lastNames: String,
    dateBirthday: Date,
    idBranch: Branch
  ) {
    this.dpi = dpi;
    this.names = names;
    this.lastNames = lastNames;
    this.dateBirthday = dateBirthday;
    this.branch = idBranch;
  }
}
