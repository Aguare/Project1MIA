import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./Components/login/login.component";
import { NavSellerComponent } from "./Components/Seller/nav-seller/nav-seller.component";
import { NavInventoryComponent } from "./Components/Inventory/nav-inventory/nav-inventory.component";
import { NavCellarComponent } from "./Components/Cellar/nav-cellar/nav-cellar.component";
import { NavAdminComponent } from "./Components/Admin/nav-admin/nav-admin.component";

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
    children: [],
  },
  {
    path: "Inventory",
    component: NavInventoryComponent,
    children: [],
  },
  {
    path: "Cellar",
    component: NavCellarComponent,
    children: [],
  },
  {
    path: "Admin",
    component: NavAdminComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
