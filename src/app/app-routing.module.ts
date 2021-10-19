import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MasterComponent} from "./admin/layouts/master/master.component";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import {UserListComponent} from "./admin/users/user-list/user-list.component";
import {LoginComponent} from "./admin/login/login.component";

const routes: Routes = [
  {
    path: "admin",
    component: MasterComponent,
    children: [
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path:'users',
        component: UserListComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
