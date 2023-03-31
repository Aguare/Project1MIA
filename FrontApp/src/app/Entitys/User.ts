import { Employee } from "./Employee";

export class User {
  username: string;
  password: string;
  role: string;
  fk_dpi: Employee;

  constructor(
    username: string,
    password: string,
    role: string,
    fk_dpi: Employee
  ) {
    this.fk_dpi = fk_dpi;
    this.username = username;
    this.password = password;
    this.role = role;
  }
}
