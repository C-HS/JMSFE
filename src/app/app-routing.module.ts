import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: DashboardComponent,
    data: { breadcrumb: 'Home'} },
  { path: 'dashboard', component: DashboardComponent,
    data: { breadcrumb: 'Dashboard'} },
  { path: 'employees',
    loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule),
    data: { breadcrumb: 'Employees'} },
  { path: 'products',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
    data: { breadcrumb: 'Products'} },
  { path: 'ordermgr',
    loadChildren: () => import('./order-management/order-management.module').then(m => m.OrderManagementModule),
    data: {breadcrumb: 'Order'} },
  { path: 'companymgr',
    loadChildren: () => import('./company-management/company-management.module').then(m => m.CompanyManagementModule),
    data: { breadcrumb: 'Company'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
