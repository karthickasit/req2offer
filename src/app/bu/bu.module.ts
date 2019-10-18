import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuRoutingModule } from './bu-routing.module';

import { BuComponent } from './bu.component';
import { BuMyreqsComponent } from './bu-myreqs/bu-myreqs.component';
import { BuSelectedcandidetsComponent } from './bu-selectedcandidets/bu-selectedcandidets.component';
import { RqsComponent } from './rqs/rqs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BudashboardComponent } from './budashboard/budashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";
import { ChangepasswordComponent } from './changepassword/changepassword.component';
@NgModule({
  declarations: [ BuComponent, BuMyreqsComponent, BuSelectedcandidetsComponent, RqsComponent, BudashboardComponent, ProfileComponent, ChangepasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BuRoutingModule,
     FormsModule,
     NgxPaginationModule,
     NgxSpinnerModule

  ]
})
export class BuModule { }
