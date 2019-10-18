import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-selected-candidate-to-sh',
  templateUrl: './selected-candidate-to-sh.component.html',
  styleUrls: ['./selected-candidate-to-sh.component.scss']
})
export class SelectedCandidateToSHComponent implements OnInit {
  selectedcandidates: any;

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
  id: any;
  user_id: string;
  status: any;
  refernce_number: any;
  designation: any;
  employee_type: any;
  CTC: any;
  resource_location: any;
  rol: any;
  ResulatantUser: any;
  firstName: any;
  bool: any = true;
  notify: string;
  fd_data: boolean = false;
  f_data: boolean = false;
  constructor(private http: HttpClient, private as: ApiservicesService ) {
      this.id = localStorage.getItem('employee_id');
      this.as.get_account(this.id).subscribe(res => {
        console.log(res);
        if (res['status_code'] === 200){
          this.f_data = true;
          this.selectedcandidates = res['details'];

        }
      if (res['status_code'] === 204) {
        this.fd_data = true;
        this.notify = 'No Selected Candidates Under this Employee' ;
       } else  {
         if (res['status_code'] === 500) {
           this.bool = false;
           this.notify = 'Error Correcting Database';
         }
       }

      
    });
  }
  ngOnInit() {
  }

  view(data) {
    this.internal_id = data['internal_req_id'];
    this.refernce_number = data['Reference_number'];
    this.employee_name = data['employee_name'];
    this.email_id = data['email_id'];
    this.contact_number = data['contact_number'];
    this.job_location = data['job_location'];
    this.joining_date = data['joining_date'];
    this.offer_validity_date = data['offer_validity_date'];
    this.status = data['status'];
    this.designation = data['designation'];
    this.employee_type = data['employee_type'];
    this.CTC = data['CTC'];
    this.resource_location = data['resource_location'];
  }
}
