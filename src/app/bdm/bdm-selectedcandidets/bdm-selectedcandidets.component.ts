import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-bdm-selectedcandidets',
  templateUrl: './bdm-selectedcandidets.component.html',
  styleUrls: ['./bdm-selectedcandidets.component.scss']
})
export class BdmSelectedcandidetsComponent implements OnInit {
  candidates: any;
  notify: string;
  bool: any = true;
  candidate_address: any;
  confirmed_date: any;
  contact_number: any;
  ctc: any;
  job_location: any;
  date_of_joining: any;
  email: any;
  employee_id: any;
  employee_name: any;
  employee_type: any;
  experience: any;
  others: any;
  req_id: any;
  offer_validity_date: any;
  technology: any;
  designation: any;

  constructor(private as: ApiservicesService) {
    const id = localStorage.getItem('employee_id');
    this.as.get_account(id).subscribe(res => {
      console.log(res);
      if (res['status_code'] === 204) {
        this.bool = false;
        this.notify = 'No Selected Candidates Under this Employee' ;
       } else  {
         if (res['status_code'] === 500) {
           this.bool = false;
           this.notify = 'Error Correcting Database';
         }
       }
      this.candidates = res['details'];
    });
   }

  ngOnInit() {
  }

view(data) {
  this.candidate_address = data['candidate_address'];
  this.confirmed_date = data['confirmed_date'];
  this.contact_number = data['contact_number'];
  this.ctc = data['ctc'];
  this.contact_number = data['contact_number'];
  this.job_location = data['job_location'];
  this.designation = data['designation'];
  this.email = data['email'];
  this.employee_id = data['employee_id'];
  this.employee_name = data['employee_name'];
  this.employee_type = data['employee_type'];
  this.experience = data['experience'];
  this.others = data['others'];
  this.req_id = data['req_id'];
  this.offer_validity_date = data['offer_validity_date'];
  this.technology = data['technology'];
  this.date_of_joining = data['date_of_joining'];
}

}
