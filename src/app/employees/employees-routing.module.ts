import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
const routes: Routes = [
  { path: '', component: ListEmployeesComponent },
  { path: 'employees', component: ListEmployeesComponent },
  { path: 'addEmployee', component: AddEmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
