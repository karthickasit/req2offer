import { HelpComponent } from './help/help.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { AuthGuard } from '../gaurds/auth.guard';
import {CostcenterComponent} from './costcenter/costcenter.component';
import {BusinessunitComponent} from './businessunit/businessunit.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { SubbusinessunitComponent } from './subbusinessunit/subbusinessunit.component';
import { EmployeeeducationComponent } from './employeeeducation/employeeeducation.component';
import { MaritalstatusComponent } from './maritalstatus/maritalstatus.component';
import { StatelistComponent } from './statelist/statelist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { GpaComponent } from './gpa/gpa.component';
import { ResoucetypeComponent } from './resoucetype/resoucetype.component';
import { EmployeestatusComponent } from './employeestatus/employeestatus.component';
import { SeparationtypeComponent } from './separationtype/separationtype.component';
import { RoleComponent } from './role/role.component';
import { SystemComponent } from './system/system.component';
import { EmployeedesignationComponent } from './employeedesignation/employeedesignation.component';
import { EmployeeComponent } from './employee/employee.component';
import { PassportcenterComponent } from './passportcenter/passportcenter.component';
import{ EmployeeeditComponent} from './employee/employeeedit/employeeedit.component';
import { SkillComponent } from './skill/skill.component';
export const HomeRoutes: Routes = [
    {path:'',component:HomeComponent,canActivate:[AuthGuard],
    children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'ab',component:ReportComponent},
    {path:'costcenter',component:CostcenterComponent},
    {path:'businessunit',component:BusinessunitComponent},
    {path:'subbusinessunit',component:SubbusinessunitComponent},
    {path:'employeeeducation',component:EmployeeeducationComponent},
    {path:'maritalstatus',component:MaritalstatusComponent},
    {path:'statelist',component:StatelistComponent},
    {path:'userlist',component:UserlistComponent},
    {path:'insurance',component:InsuranceComponent},
    {path:'resoucetype',component:ResoucetypeComponent},
    {path:'employeestatus',component:EmployeestatusComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'employeedesignation',component:EmployeedesignationComponent},
    {path:'separationtype',component:SeparationtypeComponent},
    {path:'passportcenter',component:PassportcenterComponent},
    {path:'gpa',component:GpaComponent},
    {path:'role',component:RoleComponent},
    {path:'system',component:SystemComponent},
    {path:'help',component:HelpComponent},
    {path:'employeeedit',component:EmployeeeditComponent},
    {path:'Empskill',component:SkillComponent}

    ]
   }]
