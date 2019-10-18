import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiservicesService } from 'src/app/services/apiservices.service';
@Component({
  selector: 'app-externalreqs',
  templateUrl: './externalreqs.component.html',
  styleUrls: ['./externalreqs.component.scss']
})
export class ExternalreqsComponent implements OnInit {
  public external: any;
  values: any;
  user_id: any;
  notice_period = new Date();
  account_manager: any;
  customer_Id: any;
  skills: any;
  years_of_experience: any;
  job_location: any;
  date_of_joining: any;
  customer_offer_ctc: any;
  expexted_budget: any;
  margin: any;
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
  customerName: any;
  acoountManager: any;
  perPage: any;
  numOfPages: any;
  totalitems: any;
  currentpage: any = 1;
  f_data: any = false;
  fd_data: any = false;
  feedbacks: string;
  bool: any = false;

   constructor(private http: HttpClient, private routerNavigate: Router, private as: ApiservicesService, 
      private spinner: NgxSpinnerService) {

        this.as.get_customerlist().subscribe(res => {
          this.customerName = res['response'];
        });
        this.as.get_accountmanager().subscribe(res => {
          this.acoountManager = res['accountManagers'];
        });
  }

  view(data) {
    this.as.get_particaular_externalreq(data['external_id']).subscribe(res => {
    console.log(res);
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
 ngOnInit() {
   this.spinner.show();
  this.viewexternlareq();
  }


  viewexternlareq() {
  this.as.view_externlareq(this.currentpage).subscribe(res => {
    console.log(res);
    if (res['status_code'] === 200 ) {
      this.external = res['response'];
      this.perPage = res['per_page'];
      this.numOfPages = res['total_pages'];
      this.totalitems = res['total_externalreqs'];
      this.bool = true;
      this.spinner.hide();
    } else {
      if ( res['status_code'] === 204) {
        this.bool = false;
        this.spinner.hide();
      }
    }
       });
      }
  pagechange(event) {
    this.currentpage = event;
    this.viewexternlareq();
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

  this.feedbacks = '';
  this.f_data = false;
  this.fd_data = false;
}
}