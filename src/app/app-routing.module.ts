import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { BuComponent } from './bu/bu.component';
import { LoginComponent } from './index/login/login.component';
import { IndexComponent } from './index/index.component';


const routes:Routes = [
  {path:"",redirectTo:"/login", pathMatch:"full"},
  {path:"login",component:LoginComponent},
 
 
 
];


@NgModule({
  imports: [RouterModule.forRoot([])],
  exports: [RouterModule]
})
export class AppRoutingModule {}
