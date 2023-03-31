import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Alert } from "src/app/Entitys/Alert";
import { Client } from "src/app/Entitys/Client";
import { ListProducts } from "src/app/Entitys/ListProducts";
import { Sale } from "src/app/Entitys/Sale";
import { SaleGroup } from "src/app/Entitys/SaleGroup";
import { User } from "src/app/Entitys/User";
import { ConsultsService } from "src/app/Services/Consults.service";
import { StorageService } from "src/app/Services/Storage/storage.service";

@Component({
  selector: "app-confirm-sale",
  templateUrl: "./confirm-sale.component.html",
  styleUrls: ["./confirm-sale.component.scss"],
})
export class ConfirmSaleComponent {
  search: string = "";
  name: string = "";
  address: string = "";

  @Output() cancel = new EventEmitter();
  @Output() message = new EventEmitter();
  @Input() list_products: ListProducts[] = [];
  user: User = this.storage.getUser();
  total: number = 0;
  list_clients: Client[] = [];
  cli: Client = new Client("", "", "");
  clientSelected: boolean = false;
  lastSale: Sale | null = null;
  discount: number = 0;
  totalWithDiscount: number = 0;

  alertDiscount: Alert = new Alert("", "", "", false);
  alertMessage: Alert = new Alert("", "", "", false);

  constructor(
    private service: ConsultsService,
    private storage: StorageService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.calculateTotal();
  }

  selectClient(client: Client) {
    this.clientSelected = true;
    this.cli = client;
    this.name = client.names_c;
    this.address = client.address;
    this.search = this.cli.nit;
    this.service.getLastSaleByNit(this.cli.nit).subscribe((data) => {
      this.lastSale = data;
    });
  }

  calculateDiscount() {
    if (this.lastSale != null) {
      if (this.lastSale.total > 10000) {
        this.discount = 10;
      } else if (this.lastSale.total > 5000) {
        this.discount = 5;
      } else {
        this.discount = 2;
      }
      this.alertDiscount = new Alert(
        "Descuento",
        "Se aplica un descuento del " + this.discount + "% en la compra",
        "success",
        true
      );
      this.totalWithDiscount = this.total - (this.total * this.discount) / 100;
    }
  }

  searchClientNit() {
    this.clientSelected = false;
    this.service.searchClientNit(this.search).subscribe((data) => {
      this.list_clients = data;
    });
  }

  calculateTotal() {
    this.total = 0;
    this.list_products.forEach((element) => {
      element.subtotal = element.idProduct.price * element.quantity;
      this.total += element.idProduct.price * element.quantity;
    });
  }

  cf() {
    this.search = "C/F";
    this.name = "Consumidor Final";
    this.address = "Ciudad";
    this.clientSelected = true;
  }

  cancelSale() {
    this.cancel.emit();
  }

  confirmSale() {
    if (this.search != "" && this.name != "" && this.address != "") {
      let currentDate = new Date();
      let formattedDate = currentDate.toISOString().substring(0, 10);
      let saleGroup = new SaleGroup(
        this.list_products,
        new Sale(
          0,
          currentDate,
          this.total,
          this.user.fk_dpi.branch.idBranch,
          this.user.fk_dpi.dpi,
          this.search
        )
      );
      console.log(saleGroup);
      this.service.addSale(saleGroup).subscribe(
        (data) => {
          this.alertMessage = data;
          this.message.emit(data);
        },
        (error) => {
          this.alertMessage = error;
        }
      );
    }
  }
}
