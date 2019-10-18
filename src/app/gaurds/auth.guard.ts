import { AuthService } from "./../services/auth.service";
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Location } from "@angular/common";

@Injectable({
providedIn: "root"
})
export class AuthGuard implements CanActivate {
constructor(private authService: AuthService,private routerNavigate: Router,private loc:Location) {
 
   
}

canActivate(): boolean {
    var role=localStorage.getItem('role');
    var tkn=localStorage.getItem('tkn');

if(tkn&&role==='HR')
{
   
return true;
}
else
{
  this.loc.back();  
return false;
}
}

}
