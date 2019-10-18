import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { HelpComponent } from './help/help.component';
import { CostcenterComponent } from './costcenter/costcenter.component';
import { BusinessunitComponent } from './businessunit/businessunit.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { OrderModule } from 'ngx-order-pipe';
import { InsuranceComponent } from './insurance/insurance.component';
import { SubbusinessunitComponent } from './subbusinessunit/subbusinessunit.component';
import { EmployeeeducationComponent } from './employeeeducation/employeeeducation.component';
import { MaritalstatusComponent } from './maritalstatus/maritalstatus.component';
import { StatelistComponent } from './statelist/statelist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { GpaComponent } from './gpa/gpa.component';
import { EmployeestatusComponent } from './employeestatus/employeestatus.component';
import { ResoucetypeComponent } from './resoucetype/resoucetype.component';
import { SeparationtypeComponent } from './separationtype/separationtype.component';
import { RoleComponent } from './role/role.component';
import { SystemComponent } from './system/system.component';
import { EmployeedesignationComponent } from './employeedesignation/employeedesignation.component';
import { EmployeeComponent } from './employee/employee.component';
import { PassportcenterComponent } from './passportcenter/passportcenter.component';
import { EmployeeeditComponent } from './employee/employeeedit/employeeedit.component';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  declarations: [DashboardComponent, ReportComponent, HelpComponent, CostcenterComponent, BusinessunitComponent, InsuranceComponent, SubbusinessunitComponent, EmployeeeducationComponent, MaritalstatusComponent, StatelistComponent, UserlistComponent,  GpaComponent, EmployeestatusComponent, ResoucetypeComponent,  SeparationtypeComponent, RoleComponent, SystemComponent, EmployeedesignationComponent, EmployeeComponent, PassportcenterComponent, EmployeeeditComponent, SkillComponent, SelectedCandidatesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    FormsModule,
    OrderModule
  ]
})
export class HomeModule { }
