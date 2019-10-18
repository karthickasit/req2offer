import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffingRoutingModule } from './staffing-routing.module';
import { StInternalReqComponent } from './st-internal-req/st-internal-req.component';
import { StExternalReqComponent } from './st-external-req/st-external-req.component';
import { StaffingComponent } from './staffing.component';
import { OrderModule } from 'ngx-order-pipe';
import { SelectedCandidateToSHComponent } from './selected-candidate-to-sh/selected-candidate-to-sh.component';
import { MyReqsOfSHComponent } from './my-reqs-of-sh/my-reqs-of-sh.component';
import { MyExternalReqComponent } from './my-external-req/my-external-req.component';
import { MyInternalReqComponent } from './my-internal-req/my-internal-req.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { StaffingprofileComponent } from './staffingprofile/staffingprofile.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxSpinnerModule } from "ngx-spinner";
import { StdashboardComponent } from './stdashboard/stdashboard.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

@NgModule({
  declarations: [StaffingComponent, ChangepasswordComponent, StInternalReqComponent, StExternalReqComponent, SelectedCandidateToSHComponent, MyReqsOfSHComponent, MyExternalReqComponent, MyInternalReqComponent, StaffingprofileComponent, StdashboardComponent],
  imports: [
    CommonModule,
    StaffingRoutingModule,
    OrderModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxSpinnerModule
  ]
})

export class StaffingModule { }
