import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-fmexternals',
  templateUrl: './fmexternals.component.html',
  styleUrls: ['./fmexternals.component.scss']
})
export class FmexternalsComponent implements OnInit {
  user_id: any = localStorage.getItem('employee_id');
  role: any = localStorage.getItem('role');
  name: any = localStorage.getItem('username');
  contact_number: any;
  customer_name: any;
  employee_name: any;
  req_id: any;
  request_raised_date: any;
  skills: any;
  status: any;
  years_of_experience: any;
  id: any;
  data: any[] = new Array ;
  values: any;
  externalReqs: any;
  external_id: any;
  raisedby: any;
  ApprovalsExternal: any;
  currentpage: any = 1;
  perPage: any;
  numOfPages: any;
  totalitems: any;
  description: any;
  bool: any = false;

constructor(private http: HttpClient, private fb: FormBuilder,
        private routerNavigate: Router, private as: ApiservicesService, private spinner: NgxSpinnerService ) {}
ngOnInit() {
  this.spinner.show();
  this.getExternalApprovlasList();
}
getExternalApprovlasList() {
  this.as.get_approvalexternalreq_byuserid(this.user_id, this.currentpage).subscribe(res => {
    if (res['status_code'] === 200) {
      this.externalReqs = res['externalReqs'];
      console.log(this.externalReqs);
      this.perPage = res['per_page'];
      this.numOfPages = res['total_pages'];
      this.totalitems = res['total_externalapprovalslist'];
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
pagechange(event) {
  this.currentpage = event;
  this.getExternalApprovlasList();
}

view(data) {
    console.log(data);
    this.raisedby = data['employee_name'];
    this.as.get_particaular_externalreq(data['req_id']).subscribe(res => {
      this.values = res['ExternalReq'][0];
      console.log(this.values);
      this.req_id = data['req_id'];
      this.customer_name = data['customer_name'];
      this.contact_number = data['contact_number'];
      this.employee_name = data['employee_name'];
      this.status = data['status'];
      this.skills = data['skills'];
      this.years_of_experience = data['years_of_experience'];
      this.request_raised_date = data['request_raised_date'] ;
      this.externalReqs = res['externalReqs'];
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
          this.getExternalApprovlasList();
          } else {
            this.spinner.hide();
            Swal.fire(
            ' Responded successfully!',
             res['response'],
            'success' );
            this.getExternalApprovlasList();
          }
        });
      //   this.getExternalApprovlasList();
      // })
  }

}
