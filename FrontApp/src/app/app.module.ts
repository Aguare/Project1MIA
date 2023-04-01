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
import { NavInventoryComponent } from "./Components/Inventory/nav-inventory/nav-inventory.component";
import { NavCellarComponent } from "./Components/Cellar/nav-cellar/nav-cellar.component";
import { NavAdminComponent } from "./Components/Admin/nav-admin/nav-admin.component";
import { LogoutComponent } from "./Components/logout/logout.component";
import { AlertComponent } from "./Components/alert/alert.component";
import { ClientFormComponent } from "./Components/Seller/client-form/client-form.component";
import { ListClientsComponent } from "./Components/Seller/list-clients/list-clients.component";
import { ProductFormComponent } from './Components/Inventory/product-form/product-form.component';
import { ListProductsComponent } from './Components/Inventory/list-products/list-products.component';
import { ListEmployeesComponent } from './Components/Admin/list-employees/list-employees.component';
import { EmployeeFormComponent } from './Components/Admin/employee-form/employee-form.component';
import { SaleComponent } from './Components/Seller/sale/sale.component';
import { ProductCardComponent } from './Components/Seller/product-card/product-card.component';
import { ListReportsComponent } from './Components/Admin/list-reports/list-reports.component';
import { MoveProductComponent } from './Components/Inventory/move-product/move-product.component';
import { IncrementProductComponent } from './Components/Inventory/increment-product/increment-product.component';
import { ConfirmSaleComponent } from './Components/Seller/confirm-sale/confirm-sale.component';
import { Report1Component } from './Components/Admin/report1/report1.component';
import { Report2Component } from './Components/Admin/report2/report2.component';
import { ReportBranchComponent } from './Components/Admin/report-branch/report-branch.component';
import { ReportEmployeeComponent } from './Components/Admin/report-employee/report-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavSellerComponent,
    NavInventoryComponent,
    NavCellarComponent,
    NavAdminComponent,
    LogoutComponent,
    AlertComponent,
    ClientFormComponent,
    ListClientsComponent,
    ProductFormComponent,
    ListProductsComponent,
    ListEmployeesComponent,
    EmployeeFormComponent,
    SaleComponent,
    ProductCardComponent,
    ListReportsComponent,
    MoveProductComponent,
    IncrementProductComponent,
    ConfirmSaleComponent,
    Report1Component,
    Report2Component,
    ReportBranchComponent,
    ReportEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ConsultsService,
    { provide: popper, useValue: popper },
    AlertComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
