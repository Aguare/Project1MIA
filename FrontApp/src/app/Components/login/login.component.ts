import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Alert } from "src/app/Entitys/Alert";
import { User } from "src/app/Entitys/User";
import { ConsultsService } from "src/app/Services/Consults.service";
import { StorageService } from "src/app/Services/Storage/storage.service";
import { RedirectService } from "src/app/Services/redirect.service";
import { AlertComponent } from "../alert/alert.component";
import { Employee } from "src/app/Entitys/Employee";
import { Branch } from "src/app/Entitys/Branch";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  alert: Alert = new Alert("", "", "", false);
  loginForm: FormGroup;
  user: User = new User(
    "",
    "",
    "",
    new Employee(0, "", "", new Date(), new Branch(0, "", "", ""))
  );

  constructor(
    private fb: FormBuilder,
    private verify: ConsultsService,
    private redirect: RedirectService,
    private storage: StorageService
  ) {
    this.loginForm = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(3)]],
    });
  }

  validate() {
    if (this.loginForm.valid) {
      this.user.username = this.loginForm.value.username;
      this.user.password = this.loginForm.value.password;
      this.verify.validateUser(this.user).subscribe(
        (correct: User) => {
          if (correct.role != "error") {
            this.storage.add(correct, "User");
            this.redirect.redirectLogin();
          } else {
            this.alert = new Alert(
              "Usuario o contraseña incorrectos",
              "Error",
              "danger",
              true
            );
            this.loginForm.reset();
          }
        },
        (error) => {
          this.alert = new Alert(
            "No hay conexión con el servidor",
            "Error",
            "warning",
            true
          );
          this.loginForm.reset();
        }
      );
    }
  }
}
