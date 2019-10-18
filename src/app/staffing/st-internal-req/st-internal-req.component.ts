import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-st-internal-req',
  templateUrl: './st-internal-req.component.html',
  styleUrls: ['./st-internal-req.component.scss']
})

export class StInternalReqComponent implements OnInit {
  selectedcandidates: any;
  data: any[] = new Array ;
  selected: object;
  result: any;
  internal_id: number;
  employee_name: any;
  email_id: any;
  contact_number: any;
  flag: any;
  job_location: any;
  joining_date: any;
  offer_validity_date: any;
  routerNavigate: any;
  id: any;
  user_id: any = localStorage.getItem('employee_id');
  status: any;
  refernce_number: any;
  designation: any;
  employee_type: any;
  CTC: any;
  resource_location: any;
  get_approvalinternalreq_byuserid: any;
  get_internalreqby_id: any;
  budget: any;
  bu_name: any;
  cost_center_name: any;
  date_of_joining: any;
  notice_period: any;
  request_raised_date: any;
  sbu_name: any;
  skills: any;
  years_of_experience: any;
  bunit: any;
  sbunit: any;
  elst: any;
  raisedby: any;
  currentpage: any = 1 ;
  role: any = localStorage.getItem('role');
  ApprovalsInternal: any;
  perPage: any;
  numOfPages: any;
  totalitems: any;
  Reqs: any;
  fd_data: boolean = false;
  f_data: boolean = false

  constructor(private http: HttpClient, private as: ApiservicesService, private spinner: NgxSpinnerService) {
    this.as.get_businessunit().subscribe(res => {
      this.bunit = res['BusinessUnit'];
    });
    this.as.get_subbusinessunit().subscribe(res => {
    this.sbunit = res['SubBusinessUnit'];
  });
  this.as.get_employeelist().subscribe(res => {
    this.elst = res['employee_type'];
  });
  }

  ngOnInit() {
    this.spinner.show();
    this.internalapproval();
  }
  internalapproval() {
    this.as.get_approvalinternalreq_byuserid(this.user_id, this.currentpage).subscribe(res => {
    console.log(res);
    if (res['status_code'] === 200) {
      this.f_data = true;
    this.get_approvalinternalreq_byuserid = res['internals'];
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
    this.internalapproval();
  }

  view(data1) {
    this.as.get_internalreqby_id(data1['req_id']).subscribe(res => {
      const data = res['InternalReq'][0];
      this.internal_id = data['int_req_id'];
      this.budget = data['budget'];
      this.bu_name = data['business_unit'];
      this.cost_center_name = data['cost_center_name'];
      this.date_of_joining = data['date_of_joining'];
      this.employee_name = data['employee_name'];
      this.notice_period = data['notice_period'];
      this.employee_type = data['employee_type'];
      this.request_raised_date = data['request_raised_date'];
      this.skills = data['skills'];
      this.status = data['status'];
      this.sbu_name = data['sub_business_unit'];
      this.years_of_experience = data['years_of_experience'];
  });
  }

update_approval(data, status) {
  this.spinner.show();
  const datarequired  = {
    'respondedBy': parseInt( this.user_id ),
    'userrole': this.role,
    'message': data['description'],
    'req_id': data['internal_id'],
    'raisedby': data['employee_name'],
    'status': status};
    console.log(datarequired);
    this.as.post_approvaldetails(datarequired).subscribe(res => {
      console.log(res);
      if (res['status'] === 'success') {
        this.spinner.hide();
        Swal.fire(
          'Responded successfully',
          res['response'],
          'success'
        );
      this.internalapproval();
        } else {
          this.spinner.hide();
          Swal.fire(
          'Responded successfully',
          res['response'],
          'success' );
          this.internalapproval();
         }
    });
}

// approvalslist() {
//   this.as.get_approvalinternalreq_byuserid(this.user_id, this.currentpage).subscribe(res => {
//     console.log(res);
//     this.ApprovalsInternal = res['internalReqs'];
//     this.perPage = res['per_page'];
//     this.numOfPages = res['total_pages'];
//     this.totalitems = res['total_InternalReqList'];
//   });
// }

}
