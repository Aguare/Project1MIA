import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { popper } from "@popperjs/core";
import { LoginComponent } from "./Components/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ConsultsService } from "./Services/Consults.service";
import { NavSellerComponent } from "./Components/Seller/nav-seller/nav-seller.component";
import { NavInventoryComponent } from './Components/Inventory/nav-inventory/nav-inventory.component';
import { NavCellarComponent } from './Components/Cellar/nav-cellar/nav-cellar.component';
import { NavAdminComponent } from './Components/Admin/nav-admin/nav-admin.component';
import { LogoutComponent } from './Components/logout/logout.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, NavSellerComponent, NavInventoryComponent, NavCellarComponent, NavAdminComponent, LogoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ConsultsService, { provide: popper, useValue: popper }],
  bootstrap: [AppComponent],
})
export class AppModule {}