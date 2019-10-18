import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { ReqsComponent } from './reqs/reqs.component';
import { AcselectedcandidatesComponent } from './acselectedcandidates/acselectedcandidates.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ChangepasswordComponent } from './changepassword/changepassword.component';
@NgModule({
  declarations: [AccountComponent, ReqsComponent , AcselectedcandidatesComponent, ProfileComponent, DashboardComponent, ChangepasswordComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
     ReactiveFormsModule,
     NgxSpinnerModule
  ]
})
export class AccountModule { }
