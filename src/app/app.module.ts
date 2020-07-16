import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SidebarComponent } from './ui-module/sidebar/sidebar.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { TopbarComponent } from './ui/topbar/topbar.component';
import { ContentComponent } from './ui/content/content.component';
import { FooterComponent } from './ui/footer/footer.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesQuotationComponent } from './orderManagement/sales/sales-quotation/sales-quotation.component';
import { SalesOrderComponent } from './orderManagement/sales/sales-order/sales-order.component';
import { CustomerComponent } from './orderManagement/sales/customer/customer.component';
import { PurchaseQuotationComponent } from './orderManagement/purchase/purchase-quotation/purchase-quotation.component';
import { PurchaseOrderComponent } from './orderManagement/purchase/purchase-order/purchase-order.component';
import { VendorComponent } from './orderManagement/purchase/vendor/vendor.component';
import { CatalogComponent } from './product/catalog/catalog.component';
import { CategoryComponent } from './product/category/category.component';
import { AttributesComponent } from './product/attributes/attributes.component';
import { UnitOfMeasureComponent } from './product/unit-of-measure/unit-of-measure.component';
import { ProductComponent } from './product/product/product.component';
import { CompanyComponent } from './company/company/company.component';
import { FacilityComponent } from './company/facility/facility.component';
import { LocationComponent } from './company/location/location.component';
import { TrayComponent } from './company/tray/tray.component';
import { InventoryComponent } from './invntory/inventory/inventory.component';
import { InvInOutComponent } from './invntory/inv-in-out/inv-in-out.component';
import { InvSearchComponent } from './invntory/inv-search/inv-search.component';
import { UserLoginComponent } from './security/user-login/user-login.component';
import { RoleComponent } from './security/role/role.component';
import { PermissionComponent } from './security/permission/permission.component';
import { CurrencyComponent } from './settings/currency/currency.component';
import { PaymentTermsComponent } from './settings/payment-terms/payment-terms.component';
import { EmployeesModule } from './employees/employees.module';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    ContentComponent,
    FooterComponent,
    CreateEmployeeComponent,
    ListEmployeeComponent,
    DashboardComponent,
    SalesQuotationComponent,
    SalesOrderComponent,
    CustomerComponent,
    PurchaseQuotationComponent,
    PurchaseOrderComponent,
    VendorComponent,
    CatalogComponent,
    CategoryComponent,
    AttributesComponent,
    UnitOfMeasureComponent,
    ProductComponent,
    CompanyComponent,
    FacilityComponent,
    LocationComponent,
    TrayComponent,
    InventoryComponent,
    InvInOutComponent,
    InvSearchComponent,
    UserLoginComponent,
    RoleComponent,
    PermissionComponent,
    CurrencyComponent,
    PaymentTermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeesModule,
    // SidebarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
