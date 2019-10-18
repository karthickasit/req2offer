import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from './hr.component';
import { HrInternalReqComponent } from './hr-internal-req/hr-internal-req.component';
import { HrExternalReqComponent } from './hr-external-req/hr-external-req.component';
import { HrSelectedCandidateComponent } from './hr-selected-candidate/hr-selected-candidate.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TagselectedcandidateComponent } from './tagselectedcandidate/tagselectedcandidate.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ProfileComponent } from './profile/profile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';






@NgModule({
  declarations: [HrComponent, HrInternalReqComponent, HrExternalReqComponent, HrSelectedCandidateComponent, TagselectedcandidateComponent, DashboardComponent, ProfileComponent, ChangepasswordComponent],
  imports: [
    CommonModule,
    HrRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ]
})
export class HrModule { }
