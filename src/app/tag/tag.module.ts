import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagRoutingModule } from './tag-routing.module';
import { TagComponent } from './tag.component';
import { SelectedcandidateComponent } from './selectedcandidate/selectedcandidate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaginternalreqsComponent } from './taginternalreqs/taginternalreqs.component';
import { TagexternalreqsComponent } from './tagexternalreqs/tagexternalreqs.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";
import { ProfileComponent } from './profile/profile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

@NgModule({
  declarations: [TagComponent, SelectedcandidateComponent, DashboardComponent, TaginternalreqsComponent, TagexternalreqsComponent, ProfileComponent, ChangepasswordComponent],
  imports: [
    CommonModule,
    TagRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    FormsModule
  ]
})
export class TagModule { }
