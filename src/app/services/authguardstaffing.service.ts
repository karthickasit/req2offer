import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardstaffingService {

  constructor() { }
  public isAuthenticate(): boolean {
    //method return true or false based on login credential
   // const userData=localStorage.getItem('userData');
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

// public isAuthenticate(): boolean {
// //method return true or false based on login credential
// const userData=localStorage.getItem('userData');
// if(userData && userData.length>0)
// {
// return true;
// }
// else
// {
// return false;
// }
// }

public async loginAction(postData)
{
//api connection
var responseData = {'UserName':'ojas','UserPassword':'ojas','tokenAccess':'454dsfdfs45187'};
await localStorage.setItem('userData',JSON.stringify(responseData))
return true;
}


public SignUp(postData) {
//registraion api
} 

public async logOutAction() {
//session/local storage clear
await localStorage.removeItem('userData');
await localStorage.clear();
return true;
}
// public async logOut() {
// //session/local storage clear
// await localStorage.removeItem('userData');
// await localStorage.clear();
// return true;
// }

public async getUserdata(){
const userData=localStorage.getItem('userData');
return JSON.parse(userData)
}
}

