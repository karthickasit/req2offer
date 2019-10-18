import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceComponent } from './finance.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { FmdashboardComponent } from './fmdashboard/fmdashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { FminternalsComponent } from './fminternals/fminternals.component';
import { FmexternalsComponent } from './fmexternals/fmexternals.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectedCandidatesComponent } from './selected-candidates/selected-candidates.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ChangepasswordComponent } from './changepassword/changepassword.component';



@NgModule({
  declarations: [FinanceComponent,  FmdashboardComponent, ProfileComponent, FminternalsComponent, FmexternalsComponent, SelectedCandidatesComponent, ChangepasswordComponent],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    HttpClientModule,
    OrderModule,
    NgxSpinnerModule
  ]
})
export class FinanceModule { }
