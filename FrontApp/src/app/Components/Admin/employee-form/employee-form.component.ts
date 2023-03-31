import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Alert } from "src/app/Entitys/Alert";
import { Branch } from "src/app/Entitys/Branch";
import { Employee } from "src/app/Entitys/Employee";
import { User } from "src/app/Entitys/User";
import { ConsultsService } from "src/app/Services/Consults.service";

@Component({
  selector: "app-employee-form",
  templateUrl: "./employee-form.component.html",
  styleUrls: ["./employee-form.component.scss"],
})
export class EmployeeFormComponent {
  alert: Alert = new Alert("", "", "", false);
  info: Alert = new Alert(
    "El usuario podrá acceder al sistema con su DPI y contraseña",
    "Información:",
    "info",
    true
  );
  employeForm: FormGroup = new FormGroup({});
  today = new Date();
  employee: Employee = new Employee(
    0,
    "",
    "",
    this.today,
    new Branch(1, "", "", "")
  );
  isUpdate: boolean = false;
  user: User = new User("", "", "", this.employee);

  constructor(
    private fb: FormBuilder,
    private service: ConsultsService,
    private route: ActivatedRoute
  ) {
    this.generateForm();
    let tmp = this.route.snapshot.paramMap.get("dpi");
    if (tmp != null && tmp != "new") {
      this.employee.dpi = parseInt(tmp);
      this.service.getUser(this.employee.dpi + "").subscribe(
        (correct) => {
          this.isUpdate = true;
          this.user = correct;
          this.employee = correct.fk_dpi;
          this.employeForm.setValue({
            dpi: this.employee.dpi,
            names_e: this.employee.names,
            last_names: this.employee.lastNames,
            dateBirthday: this.employee.dateBirthday,
            idBranch: this.employee.branch.idBranch,
            role: this.user.role,
            password: this.user.password,
          });
          console.log(correct);
          this.employeForm.get("dpi")?.disable();
        },
        (error) => {
          this.alert = new Alert(
            "No se puede obtener el empleado",
            "Error",
            "danger",
            true
          );
        }
      );
    }
  }

  changeBranch(event: any) {
    this.employee.branch.idBranch = event.target.value;
  }

  changeRole(event: any) {
    let val = event.target.value;
    if (val == "Bodega") {
      this.user.role = val;
      this.employee.branch.idBranch = 4;
    } else {
      this.user.role = val;
    }
  }

  generateForm() {
    this.employeForm = this.fb.group({
      dpi: [
        "",
        [
          Validators.required,
          Validators.minLength(13),
          Validators.maxLength(13),
        ],
      ],
      names_e: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      last_names: ["", [Validators.minLength(3), Validators.maxLength(50)]],
      dateBirthday: [this.today, [Validators.required]],
      idBranch: [
        1,
        [Validators.required, Validators.min(1), Validators.max(4)],
      ],
      role: ["Vendedor", [Validators.required]],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(250),
        ],
      ],
    });
  }

  validate() {
    if (this.employeForm.valid) {
      this.employee.names = this.employeForm.value.names_e;
      this.employee.lastNames = this.employeForm.value.last_names;
      this.employee.dateBirthday = this.employeForm.value.dateBirthday;
      this.employee.branch.idBranch = this.employeForm.value.idBranch;
      this.user.password = this.employeForm.value.password;
      this.user.role = this.employeForm.value.role;
      this.user.fk_dpi = this.employee;
      this.user.username = this.user.fk_dpi.dpi + "";
      if (this.isUpdate) {
        this.service.updateUser(this.user).subscribe(
          (correct) => {
            this.alert = correct;
            this.employeForm.reset();
            this.generateForm();
          },
          (error) => {
            this.alert = error;
            this.employeForm.reset();
            this.generateForm();
          }
        );
      } else {
        this.user.username = "" + this.employeForm.value.dpi;
        this.employee.dpi = this.employeForm.value.dpi;
        this.service.addUser(this.user).subscribe(
          (correct) => {
            this.alert = correct;
            this.employeForm.reset();
            this.generateForm();
          },
          (error) => {
            this.alert = error;
            this.employeForm.reset();
            this.generateForm();
          }
        );
      }
    } else {
      this.alert = new Alert("Formulario no válido", "Error", "danger", true);
    }
  }
}
