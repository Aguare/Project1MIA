export class User1 {
  email: string;
  name: string;
  password: string;
  role: string;
  points: number;

  constructor(
    email: string,
    name: string,
    password: string,
    role: string,
    points: number
  ) {
    this.email = email;
    this.name = name;
    this.password = password;
    this.role = role;
    this.points = points;
  }
}
