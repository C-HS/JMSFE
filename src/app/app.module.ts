import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesModule } from './employees/employees.module';
import { ContentComponent } from './ui/content/content.component';
import { FooterComponent } from './ui/footer/footer.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { TopbarComponent } from './ui/topbar/topbar.component';
import { CompanyManagementModule } from './company-management/company-management.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    ContentComponent,
    FooterComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    AppRoutingModule,
    EmployeesModule,
    CompanyManagementModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
