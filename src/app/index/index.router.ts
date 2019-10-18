
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { IndexComponent } from './index.component';
import { LoginGuard } from '../gaurds/login.guard';
import { SetpasswordComponent } from './setpassword/setpassword.component';


export const Indexroutes: Routes = [
{path:'',redirectTo:'login',pathMatch:'full'},

    {path:'login',component:LoginComponent,
    // canActivate:[LoginGuard],
    children:[
    // {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'sing-up',component:SignUpComponent},
    ]
    
   },
   {path:'forgotpassword',component:ForgotComponent},
   {path:'setpassword',component:SetpasswordComponent},
]