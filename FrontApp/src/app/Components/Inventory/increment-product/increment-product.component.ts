import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Alert } from "src/app/Entitys/Alert";
import { Inventory } from "src/app/Entitys/Inventory";
import { ConsultsService } from "src/app/Services/Consults.service";

@Component({
  selector: "app-increment-product",
  templateUrl: "./increment-product.component.html",
  styleUrls: ["./increment-product.component.scss"],
})
export class IncrementProductComponent {
  alert: Alert = new Alert("", "", "", false);
  inventory: Inventory | null = null;
  productForm: FormGroup = new FormGroup({});
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private service: ConsultsService,
    private fb: FormBuilder
  ) {
    let tmpIdProduct = this.route.snapshot.paramMap.get("idProduct");
    let tmpIdBranch = this.route.snapshot.paramMap.get("idBranch");
    this.generateForm();
    if (tmpIdProduct != null && tmpIdBranch != null) {
      this.service
        .getInventoryByIdBranchAndIdProduct(
          parseInt(tmpIdBranch),
          parseInt(tmpIdProduct)
        )
        .subscribe(
          (correct) => {
            this.inventory = correct;
            this.productForm.setValue({
              idProduct: this.inventory.product.idProduct,
              name_p: this.inventory.product.name_p,
              price: this.inventory.product.price,
              description: this.inventory.product.description,
              mountMove: 1,
            });
            this.productForm.controls["idProduct"].disable();
            this.productForm.controls["name_p"].disable();
            this.productForm.controls["price"].disable();
            this.productForm.controls["description"].disable();
            this.quantity = this.inventory.quantity;
          },
          (error) => {
            this.alert = new Alert(
              "No se puede obtener el inventario",
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
      idProduct: ["", Validators.required],
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
      mountMove: [1, [Validators.required, Validators.min(1)]],
    });
  }

  validate() {
    if (this.productForm.valid && this.inventory != null) {
      this.inventory.quantity += this.productForm.get("mountMove")?.value;
      this.service.updateInventory(this.inventory).subscribe(
        (correct) => {
          this.alert = correct;
          this.productForm.get("mountMove")?.disable();
        },
        (error) => {
          this.alert = error;
        }
      );
    } else {
      this.alert = new Alert("Cantidad no válida", "Error", "danger", true);
    }
  }
}
