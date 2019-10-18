
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { SelectedCandidetsComponent } from './selected-candidets/selected-candidets.component';
import { ExternalreqsComponent } from './externalreqs/externalreqs.component';
import { InternalreqsComponent } from './internalreqs/internalreqs.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomerComponent } from './customer/customer.component';
import { AuthGuard } from '../gaurds/auth.guard';
import { ChangepasswordComponent } from './changepassword/changepassword.component';



export const HomeRoutes: Routes = [
    {path: 'admin', component: HomeComponent, canActivate: [AuthGuard],
    children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'externalreqs', component: ExternalreqsComponent},
    {path: 'internalreqs', component: InternalreqsComponent},
    {path: 'customerlist', component: CustomerComponent},
    {path: 'userlist', component: UserlistComponent},
    {path: 'selected_candidets', component: SelectedCandidetsComponent},
    {path : 'profile', component: ProfileComponent},
    {path : 'changepassword', component: ChangepasswordComponent}
]
   }];
