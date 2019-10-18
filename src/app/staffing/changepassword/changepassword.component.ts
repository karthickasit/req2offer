
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PasswordValidation } from './validators4';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {

urlvalues;
forgot: any;
sai: any;
register: FormGroup;
empid: number;
employee_id: string;
pas: string;
data: string;
  oldpas: any;

constructor( private fb: FormBuilder, private routerNavigate: Router, private ar: ActivatedRoute,
    private as: ApiservicesService, private http: HttpClient) {
        this.urlvalues = this.ar.snapshot.queryParams;
        this.empid = this.urlvalues.empid;
        console.log(this.urlvalues);
}

ngOnInit() {

this.register = this.fb.group({
  oldpassword: ['', [ Validators.required, Validators.minLength(6)]],
    password: ['', [ Validators.required, Validators.minLength(6)]],
    conformpassword: ['', [ Validators.required, Validators.minLength(6)]], } , { validator: PasswordValidation.MatchPassword
});
}

send(register) {


   
//this.employee_id = JSON.parse(this.urlvalues.empid);
this.employee_id = localStorage.getItem('employee_id');
this.pas = this.register.value['conformpassword'];
this.oldpas = this.register.value['oldpassword'];
//'employee_id': this.employee_id,
const data = {'old_password': this.oldpas, 'password': this.pas,'employee_id':this.employee_id};
console.log(data);
this.as.change_password(data).subscribe(res => {
    console.log(res);
    console.log(res['status']);
    const status_code = res['status'];
    if (status_code === 'password updated successfully') 
    {
       Swal.fire(
        'Your Password Set successfully!',
        res['status'],
        'success'
        ).then(()=>{
          this.routerNavigate.navigate(['/login']);  
        })
    
    }
   
    

  
else
{
this.routerNavigate.navigate(['/hr/changepassword']);
}
});



}};

