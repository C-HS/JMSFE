import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { EditEmployeesComponent } from './edit-employees/edit-employees.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';


@NgModule({
  declarations: [
    ListEmployeesComponent,
    AddEmployeesComponent,
    EditEmployeesComponent,
    ViewEmployeesComponent,
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
