import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PasswordValidation } from './validators1';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
selector: 'app-setpassword',
templateUrl: './setpassword.component.html',
styleUrls: ['./setpassword.component.scss']
})
export class SetpasswordComponent implements OnInit {

urlvalues;
forgot: any;
sai: any;
register: FormGroup;
empid: number;
employee_id: string;
pas: string;
data: string;

constructor( private fb: FormBuilder, private routerNavigate: Router, private ar: ActivatedRoute,
    private as: ApiservicesService, private http: HttpClient) {
        this.urlvalues = this.ar.snapshot.queryParams;
        this.empid = this.urlvalues.empid;
        console.log(this.urlvalues);
}

ngOnInit() {

this.register = this.fb.group({
    password: ['', [ Validators.required, Validators.minLength(6)]],
    conformpassword: ['', [ Validators.required, Validators.minLength(6)]], } , { validator: PasswordValidation.MatchPassword
});
}

send(register) {
    
   
this.employee_id = JSON.parse(this.urlvalues.empid);
this.pas = register.value['conformpassword'];
const data = {'employee_id': this.employee_id, 'password': this.pas};
console.log(data);
this.as.set_password(data).subscribe(res => {
    console.log(res);
    const status_code = res['message'];
    if (status_code === 'password update successfully') {
        Swal.fire(
        'Your Password Set successfully!',
        res['message'],
        'success'
        );
        this.routerNavigate.navigate(['/login']);
}
this.routerNavigate.navigate(['/login']);
});
}};
