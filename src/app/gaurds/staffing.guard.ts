import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffingGuard implements CanActivate {
  constructor(private router:Router)
  {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      var tkn=localStorage.getItem('token');
      var role=localStorage.getItem('role');
      //console.log(role);
        if(tkn&&role==='Staffing Head')
        {
         
        return true;
        }
        else
        {
          
        return false;
        }
        }
  }

