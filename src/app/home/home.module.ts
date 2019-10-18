import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { OrderModule } from 'ngx-order-pipe';
import { UserlistComponent } from './userlist/userlist.component';
import { SelectedCandidetsComponent } from './selected-candidets/selected-candidets.component';
import { ExternalreqsComponent } from './externalreqs/externalreqs.component';
import { InternalreqsComponent } from './internalreqs/internalreqs.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { CustomerComponent } from './customer/customer.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ChangepasswordComponent } from './changepassword/changepassword.component';

@NgModule({
  declarations: [DashboardComponent,  UserlistComponent,
    SelectedCandidetsComponent, ExternalreqsComponent, InternalreqsComponent, ProfileComponent, CustomerComponent, ChangepasswordComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    OrderModule
  ]
})
export class HomeModule { }
