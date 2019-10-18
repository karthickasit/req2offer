import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { AuthGuard } from '../gaurds/auth.guard';

import { ReqsComponent } from './reqs/reqs.component';
import { AcselectedcandidatesComponent } from './acselectedcandidates/acselectedcandidates.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

const routes: Routes = [
  {path: 'account', component: AccountComponent, canActivate: [AuthGuard],
  children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'reqs', component: ReqsComponent},
    {path: 'selectedcandidets', component: AcselectedcandidatesComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'changepassword', component: ChangepasswordComponent}
  ]
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
