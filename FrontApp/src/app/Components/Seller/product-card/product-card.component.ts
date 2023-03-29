import { Component, Input } from "@angular/core";
import { Inventory } from "src/app/Entitys/Inventory";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent {
  @Input() inv: Inventory | null = null;

  constructor() {}
}
