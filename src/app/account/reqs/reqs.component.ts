import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-reqs',
      templateUrl: './reqs.component.html',
     styleUrls: ['./reqs.component.scss']
})
export class ReqsComponent implements OnInit {

  user_id: any;
  externalList: any;
  currentDate = new Date();
  customer_approved_budget: any;
  expected_budget: any;
  margin: number = this.customer_approved_budget - this.expected_budget;
  customerName: any;
  acoountManager: any;
  edit_user_id: string;
  edit_notice_period = new Date();
  edit_account_manager: any;
  edit_customer_Id: any;
  edit_skills: any;
  edit_years_of_experience: any;
  edit_job_location: any;
  edit_date_of_joining: any;
  edit_customer_approved_budget: any;
  edit_expected_budget: any;
  edit_margin: any;
  values: any;
  edit_external_id: any;
  ext_id: any;
  showMsg: boolean;
  showMsgg: any;
  currentpage: any = 1;
  perPage: any;
  numOfPages: any;
  totalitems: any;
  feedbackList: any;
  bool: any = true;
  notify: string;
  skills: string;
  customer_Id: string;
  account_manager: string;
  date_of_joining: string;
  notice_period: string;
  job_location: string;
  years_of_experience: string;
  f_data: any = false;
  fd_data: any = false;
  rd_data: any = false;

  constructor(private http: HttpClient, private as: ApiservicesService, private router: Router, private spinner: NgxSpinnerService) {}
  ngOnInit() {
    this.getExternalList();
    this.getCustomerList();
    this.as.get_accountmanager().subscribe( res => {
      this.acoountManager = res['accountManagers'];
    });
  }

  getCustomerList() {
    this.as.get_customerlist().subscribe(res => {
      this.customerName = res['response'];
    });
  }
  getExternalList() {
    this.spinner.show();
    this.user_id = localStorage.getItem('employee_id');
    console.log(this.user_id);
    this.as.get_reqlist_id1(this.currentpage, this.user_id).subscribe(res => {
      if (res['status_code'] === 200) {
        this.bool = true;
        this.externalList = res['response'];
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
    this.getExternalList();
  }
  fun() {
    this.margin = this.expected_budget - this.customer_approved_budget ;

 }
 fun1() {
   this.edit_margin = this.edit_expected_budget - this.edit_customer_approved_budget ;
 }

 add_ext_req(data) {
  this.spinner.show();
   this.as.post_externalreq(data).subscribe(res => {
     const status_code = res['status_code'];
     if (status_code === 200) {
      Swal.fire(
        'New req Raised successfully!',
         res['message'],
        'success'
      );
      this.spinner.hide();
    }
     this.getExternalList();
     data.resetForm({user_id: this.user_id});
   });
 }

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
     this.getExternalList();
    });
 }
 del(id) {
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
    this.as.delete_externalreq(id).subscribe(res => {
    this.getExternalList();
  });
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    );
  } else if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        );
      }});

 }


 feedback(i) {
  this.as.feedbacks(i).subscribe(res => {
    this.getExternalList();
    if (res['status_code'] === 200 ) {
      this.f_data = true;
      this.rd_data = false;
      this.getExternalList();
    this.feedbackList = res['FeedaBack'];
  }
  if (res['status_code'] === 204) {
    this.fd_data = true;
  }
  });
}
erase() {

  this.feedbackList = '';
  this.f_data = false;
  this.fd_data = false;
  this.rd_data = false;
}
 clear(data) {
  data.resetForm({user_id: this.user_id});
}


}
