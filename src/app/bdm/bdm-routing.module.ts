import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BdmComponent } from './bdm.component';
import { BdmMyreqsComponent } from './bdm-myreqs/bdm-myreqs.component';
import { BdmSelectedcandidetsComponent } from './bdm-selectedcandidets/bdm-selectedcandidets.component';
import { AuthGuard } from '../gaurds/auth.guard';
import { BdmdashboardComponent } from './bdmdashboard/bdmdashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { CustomersComponent } from './customers/customers.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';


const routes: Routes = [
  {path: 'bdm', component: BdmComponent, canActivate: [AuthGuard],
     children: [
       {path: 'dashbaord', component: BdmdashboardComponent},
       {path: 'myreqs', component: BdmMyreqsComponent},
       {path: 'selectedcandidets', component: BdmSelectedcandidetsComponent},
       {path: 'Approvals', component: ApprovalsComponent},
       {path: 'profile', component: ProfileComponent},
       {path:'customers',component:CustomersComponent},
       {path:'changepassword',component:ChangepasswordComponent}
     ]
   }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BdmRoutingModule { }




