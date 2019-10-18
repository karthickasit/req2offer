import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-my-external-req',
  templateUrl: './my-external-req.component.html',
  styleUrls: ['./my-external-req.component.scss']
})
export class MyExternalReqComponent implements OnInit {



  user_id: string = localStorage.getItem('employee_id');
  iid: string = localStorage.getItem('employee_id');
  externallist: any;
  currentDate = new Date();
  customer_approved_budget: any;
  expected_budget: any;
  margin: number = this.expected_budget - this.customer_approved_budget ;
  customerName: any;
  acoountManager: any;

  values: any;

  edit_user_id: string; edit_notice_period = new Date(); edit_account_manager: any; edit_customer_Id: any; edit_skills: any;
  edit_years_of_experience: any; edit_job_location: any; edit_date_of_joining: any; edit_customer_approved_budget: any;
  edit_expected_budget: any; edit_margin: any; edit_external_id: any;

  currentpage: any = 1; perPage: any; numOfPages: any; totalitems: any;

  bool: any = true; notify: string;

  skills: string; customer_Id: any ; account_manager: any ; years_of_experience: any; job_location: any ;
  date_of_joining: any; notice_period: any;

  f_data: any = false; fd_data: any = false; rd_data: any = false;
  feedbackList: any;
  feedbacks: any;

  constructor(private http: HttpClient, private as: ApiservicesService, private spinner: NgxSpinnerService) {

    this.as.get_customerlist().subscribe(res => {
      this.customerName = res['response'];
    });

    this.as.get_accountmanager().subscribe(res => {
      this.acoountManager = res['accountManagers'];
    });
  }
  ngOnInit() {
    this.spinner.show();
    this.externalreqlist();
  }
  externalreqlist() {
    this.as.get_reqlist_id(this.user_id, this.currentpage).subscribe(res => {
      console.log(res);
      if ( res['status_code'] === 200 ) {
        this.bool = true;
      this.externallist = res['response'];
      this.perPage = res['per_page'];
      this.numOfPages = res['total_pages'];
      this.totalitems = res['total_externalreqlist'];
      this.spinner.hide();
      } else {
        this.bool = false;
        this.notify = 'No Reqs Have been Raised';
        this.spinner.hide();
      }
    });
  }

  pagechange(event) {
    this.currentpage = event;
    this.externalreqlist();
  }
  fun() {
    this.margin = this.expected_budget - this.customer_approved_budget ;
 }
 fun1() {
  this.edit_margin = this.edit_expected_budget -this.edit_customer_approved_budget ;
}
 add_ext_req(data) {
   console.log(data);
   data.value['user_id'] = this.user_id;
  this.spinner.show();
   this.as.post_externalreq(data.value).subscribe(res => {
     const status_code = res['status_code'];
    if (status_code === 200) {
      this.spinner.hide();
      Swal.fire(
        'New req Raised successfully!',
         res['message'],
        'success'
      );
      this.externalreqlist();
       data.resetForm();
    }
   });
 }
  clear() {}

 edit(data) {
   this.as.get_particaular_externalreq(data['external_id']).subscribe(res => {
    this.values = res['ExternalReq'][0];
    this.edit_user_id = this.values['user_id'].toString();
    this.edit_external_id = this.values['external_id'];
    this.edit_notice_period = this.values['notice_period'];
    this.edit_account_manager = this.values['account_manager'].toString();
    this.edit_customer_Id = this.values['customer_id'].toString();
    this.edit_date_of_joining = this.values['date_of_joining'];
    this.edit_customer_approved_budget = this.values['customer_approved_budget'];
    this.edit_job_location = this.values['job_location'];
    this.edit_skills = this.values['skills'];
    this.edit_years_of_experience = this.values['years_of_experience'];
    this.edit_margin = this.values['margin'];
    this.edit_expected_budget = this.values['expected_budget'];
 }); }

 update_ext_req(data) {
  this.spinner.show();
   this.as.put_externalreqdetails(data.value).subscribe(res => {
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
    this.externalreqlist();
    });
 }


 deleterecord(data) {
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
   this.as.delete_externalreq(data).subscribe(res => {
    this.externalreqlist();
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
    console.log(this.fd_data);


  }
  });
}
erase() {
  this.feedbacks = '';
  this.f_data = false;
  this.fd_data = false;
  this.rd_data = false;
}


clearr() {
  
}

}
