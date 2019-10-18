import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiservicesService } from 'src/app/services/apiservices.service';



@Component({
  selector: 'app-acselectedcandidates',
  templateUrl: './acselectedcandidates.component.html',
  styleUrls: ['./acselectedcandidates.component.scss']
})
export class AcselectedcandidatesComponent implements OnInit {
  public ResulatantUser: any;
   users: any;
   cntct: string;
   emp_id: any;
   ctc: any;
   employee_name: any;
   Reference_number: any;
   contact_number: any;
   created_date: any;
   designation: any;
   employee_type: any;
   email_id: any;
   external_id: any;
   flag: any;
   internal_id: any;
   job_location: any;
   joining_date: any;
   offer_validity_date: any;
  getUserId: any;
  email: any;
  req_id: any;
  data1: any = false;
  em_data: any = false;

  constructor(private http: HttpClient, private apiService: ApiservicesService) {}
  ngOnInit() {
    this.getEmployeeId();
  }

  getEmployeeId() {
    this.getUserId = localStorage.getItem('employee_id');
    this.apiService.get_account(this.getUserId).subscribe(res => {
      console.log(res);
      if (res['status_code'] === 200) {
        this.data1 = true;
        console.log('200');
        this.ResulatantUser = res['details'];
      }
      if (res['status_code'] === 204) {
        console.log('204');
        this.em_data = true;
      }
    } );
  }
  view(data) {
    this.ctc = data['ctc'];
    this.employee_name = data['employee_name'];
     this.req_id = data['req_id'];
     this.contact_number = data['contact_number'];
     this.created_date = data['created_date'];
     this.designation = data['designation'];
     this.email = data['email'];
     this.employee_type = data['employee_type'];
     this. external_id = data['external_id'];
     this. flag = data['flag'];
     this. internal_id = data['internal_id'];
     this. job_location =  data['job_location'];
     this. joining_date = data['joining_date'];
     this. offer_validity_date = data['offer_validity_date'];


  }
  deleterecord(i) {
      console.log(i);
      this.ResulatantUser.splice(i, 1);

          }
}

