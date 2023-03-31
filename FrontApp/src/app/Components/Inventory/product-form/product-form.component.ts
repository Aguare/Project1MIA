import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Alert } from "src/app/Entitys/Alert";
import { Employee } from "src/app/Entitys/Employee";
import { Inventory } from "src/app/Entitys/Inventory";
import { Product } from "src/app/Entitys/Product";
import { User } from "src/app/Entitys/User";
import { ConsultsService } from "src/app/Services/Consults.service";
import { StorageService } from "src/app/Services/Storage/storage.service";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.scss"],
})
export class ProductFormComponent {
  alert: Alert = new Alert("", "", "", false);
  productForm: FormGroup = new FormGroup({});
  product: Product = new Product(0, "", 0, "");
  inventory: Inventory | null = null;
  isUpdate: boolean = false;
  user: User = this.storage.getUser();
  employee: Employee = this.user.fk_dpi;

  constructor(
    private fb: FormBuilder,
    private service: ConsultsService,
    private route: ActivatedRoute,
    private storage: StorageService
  ) {
    this.generateForm();
    let tmp = this.route.snapshot.paramMap.get("idProduct");
    if (tmp != null && tmp != "new" && this.employee != null) {
      this.product.idProduct = parseInt(tmp);
      this.service
        .getInventoryByIdBranchAndIdProduct(
          this.employee?.branch.idBranch,
          this.product.idProduct
        )
        .subscribe(
          (correct) => {
            this.isUpdate = true;
            this.inventory = correct;
            this.product = correct.product;
            this.productForm.setValue({
              name_p: this.product.name_p,
              price: this.product.price,
              quantity: this.inventory.quantity,
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
        [Validators.required, Validators.min(0.01), Validators.max(9999999999)],
      ],
      quantity: [
        "",
        [Validators.required, Validators.min(1), Validators.max(9999999999)],
      ],
      description: ["", [Validators.minLength(3), Validators.maxLength(150)]],
    });
  }

  validate() {
    if (this.productForm.valid && this.employee != null) {
      this.product.name_p = this.productForm.value.name_p;
      this.product.price = this.productForm.value.price;
      this.product.description = this.productForm.value.description;
      this.inventory = new Inventory(
        this.product,
        this.employee?.branch,
        this.productForm.value.quantity
      );
      if (this.isUpdate) {
        this.service.updateInventory(this.inventory).subscribe(
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
        this.service.addInventory(this.inventory).subscribe(
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
