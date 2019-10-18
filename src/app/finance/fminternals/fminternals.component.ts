import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-fminternals',
  templateUrl: './fminternals.component.html',
  styleUrls: ['./fminternals.component.scss']
})
export class FminternalsComponent implements OnInit {
  user_id: any = localStorage.getItem('employee_id');
  role: any = localStorage.getItem('role');
  name: any = localStorage.getItem('username');
  contact_number: any;
  employee_name: any;
  req_id: any;
  request_raised_date: any;
  skills: any;
  status: any;
  years_of_experience: any;
  id: string;
  internals: any;
  result: any;
  internalReqs: any;
  raisedby: any;
  currentpage: any = 1;
  perPage: any;
  numOfPages: any;
  totalitems: any;
  description: string;
  bool: any = false;

  constructor(private http: HttpClient, private fb: FormBuilder,
    private routerNavigate:Router,
    private as: ApiservicesService, private spinner: NgxSpinnerService ) {

  }
  ngOnInit() {
    this.spinner.show();
    this.getInternalApprovlasList();

  }
  getInternalApprovlasList() {
    this.user_id = localStorage.getItem('employee_id');
    this.as.get_approvalinternalreq_byuserid(this.user_id, this.currentpage).subscribe(res => {
      if (res['status_code'] === 200) {
        this.internals = res['internals'];
        console.log(this.internals);
        this.perPage = res['per_page'];
        this.numOfPages = res['total_pages'];
        this.totalitems = res['total_internalapprovalslist'];
        this.bool = true;
        this.spinner.hide();
    } else {
      if ( res['status_code'] === 204) {
        this.bool = false;
        this.spinner.hide();
      }
    }
      });
    this.spinner.hide();
  }
  pagechange(event) {
    this.currentpage = event;
    this.getInternalApprovlasList();
  }
  view(data) {
    this.raisedby = data['employee_name'];
    this.as. get_internalreqby_id(data['req_id']).subscribe(res => {
      this.result = res['InternalReq'][0];
      console.log(this.result);
      this.req_id = data['req_id'];
      this.contact_number = data['contact_number'];
      this.employee_name = data['employee_name'];
      this.status = data['status'];
      this.request_raised_date = data['request_raised_date'];
      this.skills = data['skills'];
      this.years_of_experience = data['years_of_experience'];
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
                             'req_id': data['req_id'],
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
          this.getInternalApprovlasList();
          } else {
            this.spinner.hide();
            Swal.fire(
            ' Responded successfully!',
             res['response'],
            'success' );
            this.getInternalApprovlasList();
          }
        });

  }
}
