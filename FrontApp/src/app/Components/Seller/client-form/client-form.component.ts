import { Component, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Alert } from "src/app/Entitys/Alert";
import { Client } from "src/app/Entitys/Client";
import { ConsultsService } from "src/app/Services/Consults.service";

@Component({
  selector: "app-client-form",
  templateUrl: "./client-form.component.html",
  styleUrls: ["./client-form.component.scss"],
})
export class ClientFormComponent {
  alert: Alert = new Alert("", "", "", false);
  clientForm: FormGroup = new FormGroup({});
  client: Client = new Client("", "", "");
  isUpdate: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: ConsultsService,
    private route: ActivatedRoute
  ) {
    this.generateForm();
    let tmp = this.route.snapshot.paramMap.get("nit");
    if (tmp != null && tmp != "new") {
      this.client.nit = tmp;
      this.service.getClientNit(this.client.nit).subscribe(
        (correct) => {
          this.isUpdate = true;
          this.client = correct;
          this.clientForm.get("nit")?.disable();
          this.clientForm.setValue({
            nit: this.client.nit,
            names: this.client.names_c,
            address: this.client.address,
          });
        },
        (error) => {
          this.alert = new Alert(
            "No se puede obtener el cliente",
            "Error",
            "danger",
            true
          );
        }
      );
    }
  }

  generateForm() {
    this.clientForm = this.fb.group({
      nit: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      names: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      address: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
    });
  }

  validate() {
    if (this.clientForm.valid) {
      this.client.names_c = this.clientForm.value.names;
      this.client.address = this.clientForm.value.address;
      if (this.isUpdate) {
        this.service.updateClient(this.client).subscribe(
          (correct) => {
            this.alert = correct;
            this.clientForm.reset();
            this.clientForm.get("nit")?.enable();
          },
          (error) => {
            this.alert = error;
            this.clientForm.reset();
          }
        );
      } else {
        this.client.nit = this.clientForm.value.nit;
        this.service.addClient(this.client).subscribe(
          (correct) => {
            this.alert = correct;
            this.clientForm.reset();
          },
          (error) => {
            this.alert = error;
            this.clientForm.reset();
          }
        );
      }
    } else {
      this.alert = new Alert("Formulario no válido", "Error", "danger", true);
    }
  }
}
