import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiservicesService } from '../../../../src/app/services/apiservices.service';
@Component({
  selector: 'app-internalreqs',
  templateUrl: './internalreqs.component.html',
  styleUrls: ['./internalreqs.component.scss']
})
export class InternalreqsComponent implements OnInit {
  currentDate = new Date();
  user_id: any = localStorage.getItem('employee_id');
  public internal: any;

  businessunit: string;
  costcenter: string;
  subbusinessunit: string;
  emptype: string;
  viewdata: any;
  req_id: any;
  int_req_id: any;
  bu_name: any;
  email_id: any;
  sbu_name: any;
  cost_center_name: any;
  edit_employee_name: any;
  skills: any;
  request_raised_date: any;
  date_of_joining: any;
  edit_skill: any;
  edit_years_of_experience: any;
  edit_request_raised_date: any;
  edit_budget: any;
  edit_expected_doj: any;
  edit_sub_business_unit: any;
  edit_cost_center_id: any;
  edit_employee_type: any;
  edit_notice_period: any;
  edit_business_unit: any;
  status: any;
  perPage: any;
  numOfPages: any;
  totalitems: any;
  currentpage: any = 1;
  feedbacks: string;
  f_data: any = false;
  fd_data: any = false;
  bool: any = false;


  constructor(private http: HttpClient, private routerNavigate: Router, private as: ApiservicesService,
    private spinner: NgxSpinnerService) {
    this.as.get_businessunit().subscribe(res => {
      this.businessunit = res['BusinessUnit'];
  }
  ),
  this.as.get_costcenter().subscribe(res => {
      this.costcenter = res['costcenter'];
    }
  ),
  this.as.get_subbusinessunit().subscribe(res => {
     this.subbusinessunit = res['SubBusinessUnit'];
    }
    ),
  this.as.get_employeelist().subscribe(res => {
    this.emptype = res['employee_type'];
  }
  );
  }
  ngOnInit() {
    this.spinner.show();
    this.getInternalReqsList();
  }

  getInternalReqsList() {
    this.as.get_internalreqlist(this.currentpage).subscribe(res => {
      console.log(res);
      if (res['status_code'] === 200) {
        this.internal = res['response'];
        this.perPage = res['per_page'];
        this.numOfPages = res['total_pages'];
        this.totalitems = res['total_internalreqs'];
        this.bool = true;
        this.spinner.hide();
      } else {
        if (res['status_code'] === 204 ) {
          this.bool = false;
          this.spinner.hide();
        }
      }
    });
  }
  view(i) {
    const req_id = i['int_req_id'];
    this.as.get_internalreqby_id(req_id).subscribe(res => {
    console.log(res);
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
  console.log(this.edit_notice_period);
  });
  }
ConvertToInt(val) {
        return parseInt(val, 10);
      }

pagechange(event) {
  this.currentpage = event;
  this.getInternalReqsList();

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