import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StInternalReqComponent } from './st-internal-req/st-internal-req.component';
import { StExternalReqComponent } from './st-external-req/st-external-req.component';
import { SelectedCandidateToSHComponent } from './selected-candidate-to-sh/selected-candidate-to-sh.component';
import { MyReqsOfSHComponent } from './my-reqs-of-sh/my-reqs-of-sh.component';
import { MyInternalReqComponent } from './my-internal-req/my-internal-req.component';
import { MyExternalReqComponent } from './my-external-req/my-external-req.component';

import { StaffingComponent } from './staffing.component';
import { StaffingprofileComponent } from './staffingprofile/staffingprofile.component';
import { StdashboardComponent } from './stdashboard/stdashboard.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { StaffingGuard } from '../gaurds/staffing.guard';





const routes: Routes = [
  {path:'st',component:StaffingComponent,canActivate:[StaffingGuard],
  children:[ 
  //{path:'stdashboard',component:StaffingComponent},
    {path:'stdashboard',component:StdashboardComponent},
    {path:'StInternalPath',component:StInternalReqComponent},
    {path:'StExternalPath',component:StExternalReqComponent},
    {path:'staffingselectedcandidates', component:SelectedCandidateToSHComponent},
    {path:'staffingheadmyreq', component:MyReqsOfSHComponent},
    {path:'myinternalreq', component:MyInternalReqComponent},
    {path:'myexternalreq', component:MyExternalReqComponent},
    {path:'staffingProfile', component:StaffingprofileComponent},
    {path:'changepassword', component:ChangepasswordComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffingRoutingModule { }
