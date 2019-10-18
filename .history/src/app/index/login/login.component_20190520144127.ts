import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from "@angular/core";
import {Validators, FormBuilder,FormGroup,FormControl} from "@angular/forms";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
declare var $: any;


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  OBSLoginForm:FormGroup;
  constructor(private fb:FormBuilder,private authService:AuthService,private routerNavigate:Router,private http:HttpClient) {}

  LoginAction(formData:any){
   if(this.authService.loginAction(formData)){
     console.log(formData);
     this.http.post("http://127.0.0.1:5007/login",formData).subscribe(res=>{
       console.log(res);
      var status = res['status'];
       var role = res['role'];
     console.log(status,role);
    })
    this.routerNavigate.navigate(['dashboard']);
   }
  }

  ngOnInit() {
    $(document).ready(function () {
      $('.login-content [data-toggle="flip"]').click(function() {
      	$('.login-box').toggleClass('flipped');
      	return false;
      });
      });


    this.OBSLoginForm = this.fb.group({
      'UserName': [null,Validators.required],
      'UserPassword': [null,Validators.required]
    });
  }

  //jquery
  
 

}
