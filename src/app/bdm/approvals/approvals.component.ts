import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.scss']
})
export class ApprovalsComponent implements OnInit {
  user_id: any = localStorage.getItem('employee_id');
  role: any = localStorage.getItem('role');
  name: any = localStorage.getItem('username');

  ApprovalsExternal: any;
  values: any;

  edit_user_id: any; edit_external_id: any; edit_notice_period: any; edit_account_manager: any; edit_customer_Id: any;
  edit_date_of_joining: any; edit_customer_approved_budget: any; edit_job_location: any; edit_skills: any;
  edit_years_of_experience: any; edit_margin: any; edit_expected_budget: any;

  customerName: any; acoountManager: any;

  raisedby: any;
  // value: any;

  currentpage: any = 1; externalList: any; perPage: any; numOfPages: any; totalitems: any; description: string;

  bool: any = true; notify: string;

  constructor(private as: ApiservicesService, private spinner: NgxSpinnerService)  {
    this.as.get_customerlist().subscribe(res => {
      this.customerName = res['response'];
    });

    this.as.get_accountmanager().subscribe(res => {
      this.acoountManager = res['accountManagers'];
    });
   }

  ngOnInit() {
    this.spinner.show();
    this.approvalslist();
  }

  approvalslist() {
    this.as.get_approvalexternalreq_byuserid(this.user_id, this.currentpage).subscribe(res => {
      console.log(res);
      if ( res['status_code'] === 200 ) {
        this.bool = true;
      this.ApprovalsExternal = res['externalReqs'];
      this.perPage = res['per_page'];
      this.numOfPages = res['total_pages'];
      this.totalitems = res['total_externalapprovalslist'];
      this.spinner.hide();
      } else {
        this.bool = false;
        this.notify = 'No Reqs Have been Raised By Respective Employee For Approvals';
        this.spinner.hide();
      }
    });
  }
  pagechange(event) {
    this.currentpage = event;
    this.approvalslist();
  }


  edit(data) {
    console.log(data);
    this.raisedby = data['employee_name'];
    this.as.get_particaular_externalreq(data['req_id']).subscribe(res => {

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
      this.description = "";
  });
}


update_approval(data, status) {
  this.spinner.show();
  console.log(data);
  console.log(status);
   const datarequired  = { 'respondedBy': parseInt(this.user_id),
                           'userrole': this.role,
                           'message': data['description'],
                           'req_id': data['edit_external_id'],
                           'raisedby': this.raisedby,
                           'status': status};
    console.log(datarequired);
    this.as.post_approvaldetails(datarequired).subscribe(res => {
      console.log(res);
      if (res['status'] === 'success' ) {
        this.spinner.hide();
      Swal.fire(
        ' Responded successfully!',
         res['response'],
        'success'
      );
      this.approvalslist();
      } else {
        this.spinner.hide();
        Swal.fire(
        ' Responded successfully!',
         res['response'],
        'success' );
        this.approvalslist();
      }
    });
}




}
