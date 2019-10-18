import { Component, OnInit } from '@angular/core';

import {  HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { ApiservicesService } from 'src/app/services/apiservices.service';
// import { HrmsService } from 'src/app/home/services/hrms.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { eraseStyles } from '@angular/animations/browser/src/util';

@Component({
  selector: 'app-my-internal-req',
  templateUrl: './my-internal-req.component.html',
  styleUrls: ['./my-internal-req.component.scss']
})
export class MyInternalReqComponent implements OnInit {


  Reqs: any;
  form: FormGroup;
  emp_id: string;
  currentDate = new Date();
  int_req_id: any;
  skill: any;
  years_of_experienc: any;
  fla: any;
  request_raised_dat: any;
  budashboard: any;
  costcenter: any;

  businessunit: any;
  emptype: any;
  budget: any;
  expected_doj: Date;
  user_id: string;
  bu_name: any;
  business_unit: any = '234'
  subbusinessunit: any = [{'sbu_name':'','sbu_id':'','bu_id':'234'}]
  result: void;
  edit_int_req_id: any;
  edit_skill: any;
  edit_years_of_experience: any;
  edit_request_raised_date: any;
  edit_budget: any;
  edit_expected_doj: any;
  edit_business_unit: any;
  edit_sub_business_unit: any;
  edit_cost_center_id: any;
  edit_employee_type: any;
  sbu_name: any;
  employee_name: any;
  cost_center_name: any;
  employee_type: any;
  years_of_experience: any;
  request_raised_date: any;
  date_of_joining: any;
  edit_noticeperiod: any;
  edit_notice_period: any;
  skills: any;
  status: any;
  perPage: any;
  numOfPages: any;
  totalitems: any;
  currentpage: any = 1;
  feedbacks: any;
  f_data: any = false;
  fd_data: any = false;
  r_data: any = false;
  rd_data: any = false;

constructor(private http: HttpClient, private routerNavigate: Router, private as: ApiservicesService,
  private toaster: ToastrService, private spinner: NgxSpinnerService) {

this.as.get_costcenter().subscribe(res => {
    this.costcenter = res['costcenter'];
    console.log(this.costcenter);
  }
),

this.as.get_employeelist().subscribe(res => {
  this.emptype = res['employee_type'];
}
),
this.as.get_businessunit().subscribe(res => {
  this.businessunit = res['BusinessUnit'];

}
);
this.as.get_subbusinessunit().subscribe(res => {
  this.subbusinessunit = res['SubBusinessUnit'];
  console.log(this.subbusinessunit);
}
);

}
feedback(i) {
  console.log(i);
  this.as.feedbacks(i).subscribe(res => {
    if (res['status_code'] === 200 ) { 
      this.f_data = true;
    this.feedbacks = res['FeedaBack'];
    console.log(this.feedbacks);
  }
  if (res['status_code'] === 204) {
    this.fd_data = true;


  }
  });
}
erase() {
  this.feedbacks = ''
  this.f_data = false;
  this.fd_data = false;
  this.rd_data = false;
}
ngOnInit() {
  this.spinner.show();
  this.internalreqlist();
}
internalreqlist() {
  this.user_id = localStorage.getItem('employee_id'),
  this.as.get_internalreqs(this.user_id, this.currentpage).subscribe(res => {
  console.log(res);
  if (res['status_code'] === 200) {
    this.r_data = true;
    this.Reqs = res['response'];
    this.perPage = res['per_page'];
     this.numOfPages = res['total_pages'];
    this.totalitems = res['total_internalreqlist'];
    this.spinner.hide();
  }

  if (res['status_code'] === 204) {
    this.spinner.hide();
    this.r_data = false;
    this.rd_data = true;
    console.log(this.rd_data);
  }
}

);
}


pagechange(event) {
  this.currentpage = event;
  this.internalreqlist();
}
ConvertToInt(val) {
    return parseInt(val, 10);
}
addInternalreq(internData) {
    console.log(internData.value);
    internData.value['user_id'] = this.user_id;
    this.spinner.show();
    this.as.post_internalreq(internData.value).subscribe(res => {
    console.log(res);
    const status_code = res['status_code'];
    if (status_code === 200) {
      this.spinner.hide();
      Swal.fire(
        'New req Raised successfully!',
         res['message'],
        'success'
      );
    }
    internData.reset();
    console.log(internData.value['user_id']);
    this.internalreqlist();
    });
  }

  clear() {}

submit(submit) {
    console.log(submit.value);
  }
  filtersbu(id) {

    return this.subbusinessunit.filter(item => item.bu_id === parseInt(id, 10));
  }
update(data) {
  console.log(data.value.sub_business_unit);
  this.spinner.show();
  this.as.put_interalreq(data.value).subscribe(res => { console.log(res);
    const status_code = res['status_code'];
    if (status_code === 200) {
      this.spinner.hide();
      Swal.fire(
        'Updated',
         res['message'],
        'success'
      );
    }
    if (status_code === 204) {
      this.spinner.hide();
      Swal.fire(
        'Failed',
         res['error'],
        'warning'
      );
    }
    this.internalreqlist();
    });
  }
editrecord(i) {
  const req_id = i['int_req_id'];
  this.as.get_internalreqby_id(req_id).subscribe(res => {
  console.log(res);
  const status_code = res['status_code'];
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
console.log(this.edit_notice_period);
});
}



deleterecord(i) {
  this.int_req_id = i['int_req_id'];
  Swal.fire({
    title: 'Are you sure?',
    text: 'You won"t be able to revert this!',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.value) {
      this.as.delete_internalreq(this.int_req_id).subscribe(res => {
      console.log(res);
      this.internalreqlist();
    });
    Swal.fire(
      'Deleted!',
      'Req has been deleted.',
      'success'
    );
  } else if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your record is safe :)',
          'error'
        );
      }
});
}
}
