import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-hr-internal-req',
  templateUrl: './hr-internal-req.component.html',
  styleUrls: ['./hr-internal-req.component.scss']
})
export class HrInternalReqComponent implements OnInit {

  currentpage: any = 1;
  internal : any;
  perPage: any;
  numOfPages: any;
  totalitems: any;
  int_req_id: any;
  edit_skill: any;
  edit_years_of_experience: any;
  edit_request_raised_date: any;
  edit_budget: any;
  edit_expected_doj: any;
  edit_business_unit: any;
  edit_sub_business_unit: any;
  edit_cost_center_id: any;
  edit_employee_type: any;
  edit_notice_period: any;
  edit_employee_name: any;
  status: any;
  bool: any = false;
  f_data: boolean;
  feedbacks: any;
  fd_data: boolean;

  constructor(private apiservice: ApiservicesService, private spinner: NgxSpinnerService, private as:ApiservicesService){

  }

  ngOnInit() {
    this.spinner.show();
    this.getHrInternalReqs();
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
  

  getHrInternalReqs() {
    this.apiservice.get_internalreqlist(this.currentpage).subscribe(res => {
      console.log(res);
      if (res['status_code'] === 200) {
        this.bool = true;
      this.internal = res['response'];
      this.perPage = res['per_page'];
      this.numOfPages = res['total_pages'];
      this.totalitems = res['total_internalreqs'];
      this.spinner.hide();
    } else {
      this.bool = false;
      this.spinner.hide();
    }
    });
  }

  view(id) {
    this.spinner.show();
    this.apiservice.get_internalreqby_id(id).subscribe(res => {
    console.log(res);
    this.spinner.hide();
    const result = res['InternalReq'][0];
    this.int_req_id = result['int_req_id'];
    this.edit_skill = result['skills'];
    this.edit_years_of_experience = result['years_of_experience'];
    this.edit_request_raised_date = result['request_raised_date'];
    this.edit_budget = result['budget'];
    this.edit_expected_doj = result['date_of_joining'];
    this.edit_business_unit = result['business_unit'].toString();
    this.edit_sub_business_unit = result['sub_business_unit'].toString();
    this.edit_cost_center_id = result['cost_center_id'].toString();
    this.edit_employee_type = result['employee_type'].toString();
    this.edit_notice_period = result['notice_period'];
    this.edit_employee_name = result['employee_name'];
    this.status = result['status'];
  });
  }

  pagechange(event) {
    this.currentpage = event;
    this.getHrInternalReqs();
  
  }

}

