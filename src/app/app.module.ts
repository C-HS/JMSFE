import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SidebarComponent } from './ui-module/sidebar/sidebar.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { TopbarComponent } from './ui/topbar/topbar.component';
import { ContentComponent } from './ui/content/content.component';
import { FooterComponent } from './ui/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // SidebarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
