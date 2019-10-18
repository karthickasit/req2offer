import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuComponent } from './bu.component';
import { AuthGuard } from '../gaurds/auth.guard';
import { BuMyreqsComponent } from './bu-myreqs/bu-myreqs.component';
import { BuSelectedcandidetsComponent } from './bu-selectedcandidets/bu-selectedcandidets.component';
import { RqsComponent } from './rqs/rqs.component';
import { BudashboardComponent } from './budashboard/budashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

const routes: Routes = [
  {path:'bu',component:BuComponent,canActivate:[AuthGuard],
  children:[ 
  //{path:'budashboard',component:BuComponent},
   {path:"budashboard",component:BudashboardComponent},
    {path:'bumyreqs',component:BuMyreqsComponent},
    {path:'buselectedcandidets',component:BuSelectedcandidetsComponent},
    {path:"profile",component:ProfileComponent},
    {path:"changepassword",component:ChangepasswordComponent}

  ]
}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuRoutingModule { }


