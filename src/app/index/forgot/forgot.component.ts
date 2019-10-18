import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { PasswordValidation } from './passwordvalidation';
import { ToastrService } from 'ngx-toastr';

@Component({
selector: 'app-forgot',
templateUrl: './forgot.component.html',
styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
urlvalues;
expiry: any;
forgot: any;
sai: any;
register: FormGroup;
empid: number;
employee_id: string;
exp: string;
pas: string;
data: string;
submitted: boolean;

constructor ( private http: HttpClient,private fb: FormBuilder,private routerNavigate:Router,private ar:ActivatedRoute, private toastr: ToastrService) {
this.urlvalues = this.ar.snapshot.queryParams;
this.empid = this.urlvalues.empid;
this.expiry = this.urlvalues.exp;
console.log(this.urlvalues);
}
ngOnInit() {

this.register = this.fb.group({
    password: ['', [ Validators.required, Validators.minLength(6)]],
      conformpassword: ['', [ Validators.required, Validators.minLength(6)]], } , { validator:PasswordValidation.MatchPassword
      });
}
send(register)
{
this.employee_id = JSON.parse(this.urlvalues.empid);
console.log(this.employee_id )
this.exp = JSON.parse(this.urlvalues.exp);
console.log(this.exp )

this.pas = register.value['conformpassword']

console.log("result",this.pas);

var data = {"employee_id": this.employee_id,"expiry":this.exp, "password":this.pas}
console.log(data)
this.http.put("http://192.168.2.109:5007/forgetpassword",data).subscribe(res=>{
console.log(res);

//console.log(this.register.value.conformpassword);
if (status === " password updated successfully "){
    this.toastr.success(" Password Updated Successfully ")
    this.routerNavigate.navigate(['/login']);
}
}
);


}
}