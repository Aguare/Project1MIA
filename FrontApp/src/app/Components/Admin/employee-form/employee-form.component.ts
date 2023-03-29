import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Alert } from "src/app/Entitys/Alert";
import { Branch } from "src/app/Entitys/Branch";
import { Employee } from "src/app/Entitys/Employee";
import { ConsultsService } from "src/app/Services/Consults.service";

@Component({
  selector: "app-employee-form",
  templateUrl: "./employee-form.component.html",
  styleUrls: ["./employee-form.component.scss"],
})
export class EmployeeFormComponent {
  alert: Alert = new Alert("", "", "", false);
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

  constructor(
    private fb: FormBuilder,
    private service: ConsultsService,
    private route: ActivatedRoute
  ) {
    this.generateForm();
    let tmp = this.route.snapshot.paramMap.get("dpi");
    if (tmp != null && tmp != "new") {
      this.employee.dpi = parseInt(tmp);
      this.service.getEmployeeDPI(this.employee.dpi).subscribe(
        (correct) => {
          this.isUpdate = true;
          this.employee = correct;
          this.employeForm.get("dpi")?.disable();
          this.employeForm.setValue({
            dpi: this.employee.dpi,
            names_e: this.employee.names,
            last_names: this.employee.lastNames,
            dateBirthday: this.employee.dateBirthday,
            idBranch: this.employee.branch.idBranch,
          });
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
    });
  }

  validate() {
    if (this.employeForm.valid) {
      this.employee.names = this.employeForm.value.names_e;
      this.employee.lastNames = this.employeForm.value.last_names;
      this.employee.dateBirthday = this.employeForm.value.dateBirthday;
      this.employee.branch.idBranch = this.employeForm.value.idBranch;
      if (this.isUpdate) {
        this.service.updateEmployee(this.employee).subscribe(
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
        this.employee.dpi = this.employeForm.value.dpi;
        this.service.addEmployee(this.employee).subscribe(
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
