import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Validators, FormBuilder,FormGroup,FormControl } from "@angular/forms";
import { Router, RouterLink } from '@angular/router';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-hr-external-req',
  templateUrl: './hr-external-req.component.html',
  styleUrls: ['./hr-external-req.component.scss']
})
export class HrExternalReqComponent implements OnInit {

  currentpage: any = 1;
  external: any;
  perPage: any;
  numOfPages: any;
  totalitems: any;
  values: any;
  edit_user_id: any;
  edit_external_id: any;
  edit_notice_period: any;
  edit_account_manager: any;
  edit_customer_Id: any;
  edit_date_of_joining: any;
  edit_customer_approved_budget: any;
  edit_job_location: any;
  edit_skills: any;
  edit_years_of_experience: any;
  edit_margin: any;
  edit_expected_budget: any;
  bool: any = false;
  f_data: boolean;
  feedbacks: any;
  fd_data: boolean;
  constructor(private apiservice: ApiservicesService, private spinner: NgxSpinnerService, private as:ApiservicesService){}

  ngOnInit() {
    this.spinner.show();
    this.viewexternlareq();
  }

  viewexternlareq() {
    this.apiservice.view_externlareq(this.currentpage).subscribe(res => {
         if (res['status_code'] === 200) {
          this.bool = true;
          this.external = res['response'];
          this.perPage = res['per_page'];
          this.numOfPages = res['total_pages'];
          this.totalitems = res['total_externalreqs'];
        this.spinner.hide();
      } else {
        this.bool = false;
        this.spinner.hide();
      }
        });
      }

  pagechange(event) {
  this.currentpage = event;
  this.viewexternlareq();
}

  view(id) {
    this.spinner.show();
    this.apiservice.get_particaular_externalreq(id).subscribe(res => {
    console.log(res);
    this.spinner.hide();
      this.values = res['ExternalReq'][0];
      this.edit_user_id = this.values['user_id'].toString();
      this.edit_external_id = this.values['external_id'];
      this.edit_notice_period = this.values['notice_period'];
      this.edit_account_manager = this.values['account_manager'].toString();
      this.edit_customer_Id = this.values['customer_name']
      this.edit_date_of_joining = this.values['date_of_joining'];
      this.edit_customer_approved_budget = this.values['customer_approved_budget'];
      this.edit_job_location = this.values['job_location'];
      this.edit_skills = this.values['skills'];
      this.edit_years_of_experience = this.values['years_of_experience'];
      this.edit_margin = this.values['margin'];
      this.edit_expected_budget = this.values['expected_budget'];
  }); 
}
feedback(i){
  console.log(i);
  this.as.feedbacks(i).subscribe(res => {
    if (res['status_code'] === 200 ){ 
      this.f_data = true
    this.feedbacks = res['FeedaBack'];
    console.log(this.feedbacks)
  }
  if (res['status_code'] === 204){
    this.fd_data = true


  }
  })
}
erase(){
 
  this.feedbacks = ''
  this.f_data = false;
  this.fd_data = false;

}
}


