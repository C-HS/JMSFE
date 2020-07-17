import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: '', component: ListCompanyComponent },
  { path: 'listCompany', component: ListCompanyComponent },
  { path: 'addCompany', component: AddCompanyComponent },
  { path: 'editCompany', component: EditCompanyComponent },
  { path: 'viewCompany', component: ViewCompanyComponent },
  { path: 'listFacility', component: ListFacilityComponent },
  { path: 'addFacility', component: AddFacilityComponent },
  { path: 'editFacility', component: EditFacilityComponent },
  { path: 'viewFacility', component: ViewFacilityComponent },
  { path: 'listLocation', component: ListLocationComponent },
  { path: 'addLocation', component: AddLocationComponent },
  { path: 'editLocation', component: EditLocationComponent },
  { path: 'viewLocation', component: ViewLocationComponent },
  { path: 'listTray', component: ListTrayComponent },
  { path: 'addTray', component: AddTrayComponent },
  { path: 'editTray', component: EditTrayComponent },
  { path: 'viewTray', component: ViewTrayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyManagementRoutingModule { }
