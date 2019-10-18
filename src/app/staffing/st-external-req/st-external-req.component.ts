import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-st-external-req',
  templateUrl: './st-external-req.component.html',
  styleUrls: ['./st-external-req.component.scss']
})
export class StExternalReqComponent implements OnInit {

   selectedcandidates: any;
  data: any[] = new Array ;
  selected: object;
  result: any;
  external_id: number;
  employee_name: any;
  email_id: any;
  contact_number: any;
  flag: any;
  job_location: any;
  joining_date: any;
  offer_validity_date: any;
  routerNavigate: any;
  id: any;
  status: any;
  refernce_number: any;
  designation: any;
  employee_type: any;
  CTC: any;
  resource_location: any;
  get_approvalexternalreq_byuserid: any;
  account_manager: any;
  customer_approved_budget: any;
  customer_id: any;
  date_of_joining: any;
  expected_budget: any;
  margin: any;
  notice_period: any;
  request_raised_date: any;
  skills: any;
  years_of_experience: any;
  acctmngr: any;
  custname: any;
  currentpage: any = 1;
  role: any = localStorage.getItem('role');
  perPage: any;
  numOfPages: any;
  totalitems: any;
  idd: any = localStorage.getItem('employee_id');
  user_id: any;
  f_data: boolean = false;
  fd_data: boolean = false;
  constructor(private http: HttpClient, private as: ApiservicesService, private spinner: NgxSpinnerService) {
  this.as.get_accountmanager().subscribe(res => {
    
    this.acctmngr = res['accountManagers'];
  });

  this.as.get_customerlist().subscribe(res => {
    
    this.custname = res['response'];
  });

  }
  ngOnInit() {
    this.spinner.show();
    this.get_approvalexternal();
  }
  get_approvalexternal() {
    this.as.get_approvalexternalreq_byuserid(this.idd, this.currentpage).subscribe(res => {
    
    console.log(res)
    if (res['status_code'] === 200) {
      this.f_data = true;
      this.get_approvalexternalreq_byuserid = res['externalReqs'];
    this.perPage = res['per_page'];
    this.numOfPages = res['total_pages'];
    this.totalitems = res['total_internalreqlist'];
    this.spinner.hide();
  }
  if (res['status_code'] === 204) {
    this.fd_data = true;
    this.spinner.hide();
  }
  });
  }
  pagechange(event) {
    this.currentpage = event;
    this.get_approvalexternal();
  }
    view(data) {
    this.as.get_particaular_externalreq(data['req_id']).subscribe(res =>{
      const data1 = res['ExternalReq'][0];
      this.external_id = data1['external_id'];
      this.account_manager = data1['account_manager'];
      this.customer_approved_budget = data1['customer_approved_budget'];
      this.customer_id = data1['customer_id'];
      this.date_of_joining = data1['date_of_joining'];
      this.expected_budget = data1['expected_budget']
      this.job_location= data1['job_location'];
      this.margin =data1['margin'];
      this.status = data1['status'];
      this.notice_period = data1['notice_period'];
      this.request_raised_date = data1['request_raised_date'];
      this.skills = data1['skills'];
      this.user_id = data1['user_id'];
      this.years_of_experience = data1['years_of_experience'];
  });
  }

  update_approval(data, status) {
    this.spinner.show();
     const datarequired  = { 'respondedBy': parseInt ( this.idd ) ,
                             'userrole': this.role,
                             'message': data['Message'],
                             'req_id': data['external_id'],
                             'raisedby': data['user_id'].toString(),
                             'status': status};
      console.log(datarequired);
      this.as.post_approvaldetails(datarequired).subscribe(res => {
        console.log(res);
        this.spinner.hide();
        this.get_approvalexternal()
      });
  }

}
