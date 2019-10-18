import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinanceComponent } from './finance.component';
import { AuthGuard } from '../gaurds/auth.guard';

import { FmdashboardComponent } from './fmdashboard/fmdashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { FminternalsComponent } from './fminternals/fminternals.component';
import { FmexternalsComponent } from './fmexternals/fmexternals.component';
import { SelectedCandidatesComponent } from './selected-candidates/selected-candidates.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';




const routes: Routes = [
  {path:'fm',component:FinanceComponent,canActivate:[AuthGuard],
     children:[ 
       //{path:'financedashboard',component:FinanceComponent},
       {path:'dashboard',component:FmdashboardComponent},
       {path:'fminternalreqs',component:FminternalsComponent},
       {path:'fmexternalreqs',component:FmexternalsComponent},
       {path:'profile',component:ProfileComponent},
       {path:'selectedcandidates',component:SelectedCandidatesComponent},
       {path:'changepassword',component:ChangepasswordComponent},
      
        
     ]
   }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
