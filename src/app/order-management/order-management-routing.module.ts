import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListQuotationComponent } from './salesQuotation/list-quotation/list-quotation.component';
import { AddQuotationComponent } from './salesQuotation/add-quotation/add-quotation.component';
import { EditQuotationComponent } from './salesQuotation/edit-quotation/edit-quotation.component';
import { ViewQuotationComponent } from './salesQuotation/view-quotation/view-quotation.component';
import { ListPurchaseQuotationComponent } from './purchaseQuotation/list-purchase-quotation/list-purchase-quotation.component';
import { AddPurchaseQuotationComponent } from './purchaseQuotation/add-purchase-quotation/add-purchase-quotation.component';
import { EditPurchaseQuotationComponent } from './purchaseQuotation/edit-purchase-quotation/edit-purchase-quotation.component';
import { ViewPurchaseQuotationComponent } from './purchaseQuotation/view-purchase-quotation/view-purchase-quotation.component';
import { ListSalesOrderComponent } from './salesOrder/list-sales-order/list-sales-order.component';
import { ListPurchaseOrderComponent } from './purchaseOrder/list-purchase-order/list-purchase-order.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { ViewCustomerComponent } from './customer/view-customer/view-customer.component';
import { ListVendorComponent } from './vendor/list-vendor/list-vendor.component';
import { AddVendorComponent } from './vendor/add-vendor/add-vendor.component';
import { EditVendorComponent } from './vendor/edit-vendor/edit-vendor.component';
import { ViewVendorComponent } from './vendor/view-vendor/view-vendor.component';

const routes: Routes = [
  {path: '', component: ListQuotationComponent},
  {path: 'listQuotation', component: ListQuotationComponent},
  {path: 'addQuotation', component: AddQuotationComponent},
  {path: 'editQuotation', component: EditQuotationComponent},
  {path: 'viewQuotation', component: ViewQuotationComponent},
  {path: 'listPurchaseQuotation', component: ListPurchaseQuotationComponent},
  {path: 'addPurchaseQuotation', component: AddPurchaseQuotationComponent},
  {path: 'editPurchaseQuotation', component: EditPurchaseQuotationComponent},
  {path: 'viewPurchaseQuotation', component: ViewPurchaseQuotationComponent},
  {path: 'listSalesOrder', component: ListSalesOrderComponent},
  {path: 'listPurchaseOrder', component: ListPurchaseOrderComponent},
  {path: 'listCustomer', component: ListCustomerComponent},
  {path: 'addCustomer', component: AddCustomerComponent},
  {path: 'editCustomer', component: EditCustomerComponent},
  {path: 'viewCustomer', component: ViewCustomerComponent},
  {path: 'listVendor', component: ListVendorComponent},
  {path: 'addVendor', component: AddVendorComponent},
  {path: 'EditVendor', component: EditVendorComponent},
  {path: 'ViewVendor', component: ViewVendorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderManagementRoutingModule { }
