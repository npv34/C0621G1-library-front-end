import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './admin/users/user-list/user-list.component';
import {FormsModule} from "@angular/forms";
import { MasterComponent } from './admin/layouts/master/master.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SidebarComponent } from './admin/layouts/core/sidebar/sidebar.component';
import {FooterComponent} from "./admin/layouts/core/footer/footer.component";
import {NavbarComponent} from "./admin/layouts/core/navbar/navbar.component";
import { LoginComponent } from './admin/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MasterComponent,
    DashboardComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
