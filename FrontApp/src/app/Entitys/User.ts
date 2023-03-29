import { Employee } from "./Employee";

export class User {
  username: string;
  password: string;
  email: string;
  role: string;
  fk_dpi: Employee;

  constructor(
    username: string,
    password: string,
    email: string,
    role: string,
    fk_dpi: Employee
  ) {
    this.fk_dpi = fk_dpi;
    this.username = username;
    this.password = password;
    this.email = email;
    this.role = role;
  }
}
