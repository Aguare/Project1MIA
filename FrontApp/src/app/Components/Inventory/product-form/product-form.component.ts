import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Alert } from "src/app/Entitys/Alert";
import { Product } from "src/app/Entitys/Product";
import { ConsultsService } from "src/app/Services/Consults.service";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.scss"],
})
export class ProductFormComponent {
  alert: Alert = new Alert("", "", "", false);
  productForm: FormGroup = new FormGroup({});
  product: Product = new Product(0, "", 0, "");
  isUpdate: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: ConsultsService,
    private route: ActivatedRoute
  ) {
    this.generateForm();
    let tmp = this.route.snapshot.paramMap.get("idProduct");
    if (tmp != null && tmp != "new") {
      this.product.idProduct = parseInt(tmp);
      this.service.getProduct(this.product.idProduct).subscribe(
        (correct) => {
          this.isUpdate = true;
          this.product = correct;
          this.productForm.setValue({
            name_p: this.product.name_p,
            price: this.product.price,
            description: this.product.description,
          });
        },
        (error) => {
          this.alert = new Alert(
            "No se puede obtener el producte",
            "Error",
            "danger",
            true
          );
        }
      );
    }
  }

  generateForm() {
    this.productForm = this.fb.group({
      name_p: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      price: [
        "",
        [Validators.required, Validators.min(0), Validators.max(9999999999)],
      ],
      description: ["", [Validators.minLength(3), Validators.maxLength(150)]],
    });
  }

  validate() {
    if (this.productForm.valid) {
      this.product.name_p = this.productForm.value.name_p;
      this.product.price = this.productForm.value.price;
      this.product.description = this.productForm.value.description;
      if (this.isUpdate) {
        this.service.updateProduct(this.product).subscribe(
          (correct) => {
            this.alert = correct;
            this.productForm.reset();
          },
          (error) => {
            this.alert = error;
            this.productForm.reset();
          }
        );
      } else {
        this.service.addProduct(this.product).subscribe(
          (correct) => {
            this.alert = correct;
            this.productForm.reset();
          },
          (error) => {
            this.alert = error;
            this.productForm.reset();
          }
        );
      }
    } else {
      this.alert = new Alert("Formulario no válido", "Error", "danger", true);
    }
  }
}
