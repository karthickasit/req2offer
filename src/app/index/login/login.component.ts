import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from "@angular/core";
import {Validators, FormBuilder,FormGroup,FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';
import { ApiservicesService } from 'src/app/services/apiservices.service';
declare var $: any;


 var x='http://192.168.2.109:5007';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  myForm: FormGroup ;   
  //OBSLoginForm: FormGroup;
  Abc: any;
  //forgotpassword: FormGroup;
  show: boolean;
  type: string;
  show_button: Boolean = false;
  show_eye: Boolean = false;
  status: Boolean  = false;
  popupmessage: any;
  submitted: boolean;
  constructor (private fb:FormBuilder,private authService:AuthService,private routerNavigate:Router,private http:HttpClient,
    private as:ApiservicesService, private toastr: ToastrService) {

    }
  LoginAction(formData: any) {
   if (this.authService.loginAction(formData)) {
     console.log(formData);
       this.as.login(formData).subscribe(res => {
        console.log(res['acess-token']);
       console.log(res);
       var status = res['message'];
       if (status ==="success"){
      localStorage.setItem("username",res['result'][0].employee_name);
      localStorage.setItem("token",res['acess-token']);
      localStorage.setItem('role_id', res['result'][0].id);
       localStorage.setItem("role",res['role']);
       localStorage.setItem('employee_id',res['result'][0].employee_id);
       this.toastr.success('Your logged in successfully');
       var role = res['role'];
       console.log(role);
       switch(role){
        case 'Admin':
          this.routerNavigate.navigate(['/admin/dashboard'])
          break;
          case 'Bu Head':
          this.routerNavigate.navigate(['/bu/budashboard']);
          break;
          case "BDM":
          this.routerNavigate.navigate(['/bdm/dashbaord']);
          break;
          case "HR":
          this.routerNavigate.navigate(['/hr/hrdashboard']);
          break;
          case "Staffing Head":
          this.routerNavigate.navigate(['/st/stdashboard']);
          break;
          case  "Account":
          this.routerNavigate.navigate(['/account/dashboard']);
          break;
          case  "Tag" :
          this.routerNavigate.navigate(['/tag/dashboard']);
          break;
          case "Finance Head":
            this.routerNavigate.navigate(['/fm/dashboard']);

       }
      }
      if (status === "failed"){
        this.toastr.warning(res['response']);
      }
    },
    error => alert(error));


   }
  }


 
   OBSLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
    });
    forgotpassword = this.fb.group({
      email_id: ['', [Validators.required, Validators.minLength(6)]]
    })
  //   {
  //     this.submitted = true;

  //     // stop here if form is invalid
  //     if (this.OBSLoginForm.invalid) {
  //         return;
  //     }
  // }


  ngOnInit() {
  //   $(document).ready(function () {
  //   $('.login-content [data-toggle="flip"]').click(function() {
  //   $('.login-box').toggleClass('flipped');
  // return false;
  //     });
  //     });
  //   this.OBSLoginForm = this.fb.group({
  //     email: ['', [Validators.required, Validators.email]],
  //           password: ['', [Validators.required, Validators.minLength(6)]]
  //   });
  //   this.forgotpassword = this.fb.group({
  //     email_id: ['', [Validators.required, Validators.minLength(6)]]
  //   })
  //   {
  //     this.submitted = true;

  //     // stop here if form is invalid
  //     if (this.OBSLoginForm.invalid) {
  //         return;
  //     }
  // }
}

forget:string;
  user(forgotpassword) { 
    console.log(forgotpassword )
    var mail = forgotpassword["email_id"];
    this.http.get('http://127.0.0.1:5007/forgetpassword?emailId='+ mail ).subscribe(res =>{
      console.log(res);
      var status = res['status'];

      if(status === "success"){
        this.toastr.success("we have sent link to your mail..!!")
        this.routerNavigate.navigate(['/login']);
      }
      if (status === "Email Id doesn't exist") {
        this.toastr.warning("Email Id doesn't exist");
      }
     } )
  }
   toggleShow()
   {
       this.show = !this.show;
      if (this.show){
          this.type = "text";
      }
      else {
          this.type = "password";
      }
 }
  showPassword() {
    this.show_button = !this.show_button;
    this.show_eye = !this.show_eye;
  }
  get f() { return this.OBSLoginForm.controls; }

  clear(){
    this.forgotpassword.reset();
  }
}
