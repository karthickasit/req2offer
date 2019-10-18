import { AuthGuard } from './gaurds/auth.guard';
import { AuthService } from './services/auth.service';
import { IndexModule } from './index/index.module';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import {routes} from './app.router';
import { BuModule } from './bu/bu.module';
import { BdmModule } from './bdm/bdm.module';
import { StaffingModule } from './staffing/staffing.module';
import { FinanceModule } from './finance/finance.module';
import { AccountModule } from './account/account.module';
import { HrModule } from './hr/hr.module';
import { ToastrModule } from 'ngx-toastr';
import { TagModule } from './tag/tag.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthguardstaffingService } from './services/authguardstaffing.service';




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    NoPageComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BuModule,
    BdmModule,
    IndexModule,
    AccountModule,
     StaffingModule,
    FinanceModule,
    HrModule,
    TagModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
 providers: [AuthService, AuthGuard,AuthguardstaffingService],
  bootstrap: [AppComponent ] 
})
export class AppModule { }