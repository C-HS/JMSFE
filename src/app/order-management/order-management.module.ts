import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrderManagementRoutingModule } from './order-management-routing.module';
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


@NgModule({
  declarations: [
  ListQuotationComponent,
  AddQuotationComponent,
  EditQuotationComponent,
  ViewQuotationComponent,
  ListPurchaseQuotationComponent,
  AddPurchaseQuotationComponent,
  EditPurchaseQuotationComponent,
  ViewPurchaseQuotationComponent,
  ListSalesOrderComponent,
  ListPurchaseOrderComponent,
  ListCustomerComponent,
  AddCustomerComponent,
  EditCustomerComponent,
  ViewCustomerComponent,
  ListVendorComponent,
  AddVendorComponent,
  EditVendorComponent,
  ViewVendorComponent],
  imports: [
    CommonModule,
    OrderManagementRoutingModule
  ]
})
export class OrderManagementModule { }
