import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyManagementRoutingModule } from './company-management-routing.module';
import { ListCompanyComponent } from './company/list-company/list-company.component';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { EditCompanyComponent } from './company/edit-company/edit-company.component';
import { ViewCompanyComponent } from './company/view-company/view-company.component';
import { ListFacilityComponent } from './facility/list-facility/list-facility.component';
import { AddFacilityComponent } from './facility/add-facility/add-facility.component';
import { EditFacilityComponent } from './facility/edit-facility/edit-facility.component';
import { ViewFacilityComponent } from './facility/view-facility/view-facility.component';
import { ListLocationComponent } from './location/list-location/list-location.component';
import { AddLocationComponent } from './location/add-location/add-location.component';
import { EditLocationComponent } from './location/edit-location/edit-location.component';
import { ViewLocationComponent } from './location/view-location/view-location.component';
import { ListTrayComponent } from './tray/list-tray/list-tray.component';
import { AddTrayComponent } from './tray/add-tray/add-tray.component';
import { EditTrayComponent } from './tray/edit-tray/edit-tray.component';
import { ViewTrayComponent } from './tray/view-tray/view-tray.component';


@NgModule({
  declarations: [
  ListCompanyComponent,
  AddCompanyComponent,
  EditCompanyComponent,
  ViewCompanyComponent,
  ListFacilityComponent,
  AddFacilityComponent,
  EditFacilityComponent,
  ViewFacilityComponent,
  ListLocationComponent,
  AddLocationComponent,
  EditLocationComponent,
  ViewLocationComponent,
  ListTrayComponent,
  AddTrayComponent,
  EditTrayComponent,
  ViewTrayComponent
  ],
  imports: [
    CommonModule,
    CompanyManagementRoutingModule
  ]
})
export class CompanyManagementModule { }
