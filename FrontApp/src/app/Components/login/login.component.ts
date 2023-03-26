import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { User } from "src/app/Entitys/User";
import { ConsultsService } from "src/app/Services/Consults.service";
import { StorageService } from "src/app/Services/Storage/storage.service";
import { RedirectService } from "src/app/Services/redirect.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  error: boolean = false;
  loginForm: FormGroup;
  user: User = new User("", "", "", "");

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
      this.verify.validateUser(this.user).subscribe((correct: User) => {
        if (correct.role != "error") {
          this.storage.add(correct, "User");
          this.redirect.redirectLogin();
        } else {
          this.error = true;
          this.loginForm.reset();
        }
      });
    }
  }
}
