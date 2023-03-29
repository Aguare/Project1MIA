import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./Components/login/login.component";
import { NavSellerComponent } from "./Components/Seller/nav-seller/nav-seller.component";
import { NavInventoryComponent } from "./Components/Inventory/nav-inventory/nav-inventory.component";
import { NavCellarComponent } from "./Components/Cellar/nav-cellar/nav-cellar.component";
import { NavAdminComponent } from "./Components/Admin/nav-admin/nav-admin.component";
import { ClientFormComponent } from "./Components/Seller/client-form/client-form.component";
import { ListClientsComponent } from "./Components/Seller/list-clients/list-clients.component";
import { ProductFormComponent } from "./Components/Inventory/product-form/product-form.component";
import { ListProductsComponent } from "./Components/Inventory/list-products/list-products.component";
import { ListEmployeesComponent } from "./Components/Admin/list-employees/list-employees.component";
import { EmployeeFormComponent } from "./Components/Admin/employee-form/employee-form.component";
import { SaleComponent } from "./Components/Seller/sale/sale.component";

const routes: Routes = [
  {
    path: "Login",
    component: LoginComponent,
  },
  {
    path: "",
    redirectTo: "/Login",
    pathMatch: "full",
  },
  {
    path: "Seller",
    component: NavSellerComponent,
    children: [
      { path: "Register/:nit", component: ClientFormComponent },
      { path: "List-Clients", component: ListClientsComponent },
      { path: "Sale", component: SaleComponent },
    ],
  },
  {
    path: "Inventory",
    component: NavInventoryComponent,
    children: [
      { path: "RegisterProduct/:idProduct", component: ProductFormComponent },
      { path: "List-Products", component: ListProductsComponent },
    ],
  },
  {
    path: "Cellar",
    component: NavCellarComponent,
    children: [
      { path: "RegisterProduct/:idProduct", component: ProductFormComponent },
      { path: "List-Products", component: ListProductsComponent },
    ],
  },
  {
    path: "Admin",
    component: NavAdminComponent,
    children: [
      { path: "List-Employees", component: ListEmployeesComponent },
      { path: "Register-Employee/:dpi", component: EmployeeFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
