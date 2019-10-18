
import { Component, OnInit } from '@angular/core';

import {  HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-bu-selectedcandidets',
  templateUrl: './bu-selectedcandidets.component.html',
  styleUrls: ['./bu-selectedcandidets.component.scss']
})


export class BuSelectedcandidetsComponent implements OnInit {
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
  routerNavigate: any;
  id: any;
  user_id: string;
  status: any;
  refernce_number: any;
  designation: any;
  employee_type: any;
  CTC: any;
  resource_location: any;
  data: any = false;
  em_data: any = false;
  employee_id: any;
  technology: any;
  confirmed_date: any;
  experience: any;

  constructor(private http: HttpClient, private as: ApiservicesService) {
    this.user_id = localStorage.getItem('employee_id');
    this.as.get_account(this.user_id).subscribe(res => {
    if (res['status_code'] === 200) {
      this.data = true;
      this.selectedcandidates = res['details'];
    }
    if (res['status_code'] === 204) {
      console.log('204')
      this.em_data = true;

    }
    console.log(res);
});
}
  ngOnInit() {
  }
view(data) {
    console.log(data);
    this.internal_id = data['req_id'];
    this.employee_id = data['employee_id'];
    this.employee_name = data['employee_name'];
    this.email_id = data['email'];
    this.contact_number = data['contact_number'];
    this.job_location = data['job_location'];
    this.joining_date = data['date_of_joining'];
    this.offer_validity_date = data['offer_validity_date'];
    this.status = data['others'];
    this.designation = data['designation'];
    this.employee_type = data['employee_type'];
    this.CTC = data['ctc'];
    this.resource_location = data['candidate_address'];
    this.technology = data['technology'];
    this.confirmed_date = data['confirmed_date'];
    this.experience = data['experience'];
  }
//   buedit(i){

//   console.log(i['internal_id'])
//   this.http.get('http://192.168.7.180:5007/selectedcandidate?reference_number='+ i['internal_id']).subscribe(res =>{

//   console.log(res['response'][0])
//   this.result= res ['response'][0]
//   this.internal_id=this.result['internal_id']
//   })
// }

update(i) {
   console.log(i.value);
    this.http.put ('http://192.168.7.180:5007/selectedcandidate', i.value).subscribe(res => {
      console.log(res);
    });
  }


add(selected) {

console.log(selected.value);

this.http.post ('http://192.168.7.180:5007/selectedcandidate', selected.value).subscribe(res => {
      console.log(res);
      this.id = res['response'][0];
    });

  }
}
