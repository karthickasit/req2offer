import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BdmRoutingModule } from './bdm-routing.module';
import { BdmComponent } from './bdm.component';
import { BdmMyreqsComponent } from './bdm-myreqs/bdm-myreqs.component';
import { BdmSelectedcandidetsComponent } from './bdm-selectedcandidets/bdm-selectedcandidets.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BdmdashboardComponent } from './bdmdashboard/bdmdashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxSpinnerModule } from "ngx-spinner";
import { Ng2OrderModule } from 'ng2-order-pipe';
import { CustomersComponent } from './customers/customers.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

@NgModule({
  declarations: [BdmComponent, BdmMyreqsComponent, BdmSelectedcandidetsComponent, BdmdashboardComponent, ProfileComponent, ApprovalsComponent, CustomersComponent, ChangepasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BdmRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxSpinnerModule
  ]
})
export class BdmModule { }
