import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from '../../../../src/app/services/apiservices.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-selected-candidets',
  templateUrl: './selected-candidets.component.html',
  styleUrls: ['./selected-candidets.component.scss']
})
export class SelectedCandidetsComponent implements OnInit {
  getCandidateList: any;
  candidate_address: any;
  candidate_name: any;
  contact_number: any;
  created_date: any;
  email: any;
  employee_type: any;
  experience: any;
  interview_date: any;
  interviewer: any;
  others: any;
  technology: any;
  req_id: any;
  raisedBy: any;
  raised_by: any;
  emp_id: any;
  result: any;
  candidate_type: any;
  designation: any;
  ctc: any;
  confirmed_date: any;
  date_of_joining: any;
  offer_validity_date: any;
  job_location: any;
  bool: any = false;

  constructor(private apiservice: ApiservicesService, private router: Router, private spinner: NgxSpinnerService) {}
  ngOnInit() {
    this.spinner.show();
    this.getSelectedCandidatesList();
  }

  getSelectedCandidatesList() {
    this.apiservice.getHrSelectedList().subscribe(res => {
      if (res['status_code'] === 200) {
        this.bool = true;
        this.getCandidateList = res['response'];
        this.spinner.hide();
      }
      if (res['status_code'] === 204) {
        console.log('204');
        this.bool = false;
        this.spinner.hide();
      }
      console.log(res);
  });
  }

  getCandidateById(id, raisedby) {
    this.req_id = id;
    this.raisedBy = raisedby;
    this.apiservice.get_selectedCadidates_Details_ById(id).subscribe(res => {
      console.log(res['response']);
      this.candidate_address = res['response']['candidate_address'];
      this.candidate_name = res['response']['candidate_name'];
      this.contact_number = res['response']['contact_number'];
      this.created_date = res['response']['created_date'];
      this.email = res['response']['email'];
      this.employee_type = res['response']['employee_type'];
      this.experience = res['response']['experience'];
      this.interview_date = res['response']['interview_date'];
      this.interviewer = res['response']['interviewer'];
      this.others = res['response']['others'];
      this.technology = res['response']['technology'];
    });
  }

  candidateById(id, raised_by, emp_id) {
    this.spinner.show();
      this.req_id = id;
      this.raised_by = raised_by;
      this.emp_id = emp_id;
      console.log(this.emp_id);
      this.apiservice.confirmedCandidate(id).subscribe (res => {
        this.spinner.hide();
      this.result = res['response'];
      this.candidate_name = res['response'].candidate_name;
      this.candidate_type = res['response'].employee_type;
      this.contact_number = res['response'].contact_number;
      this.email = res['response'].email
      this.experience = res['response'].experience;
      this.designation = res['response'].designation;
      this.technology = res['response'].technology;
      this.ctc = res['response'].ctc;
      this.confirmed_date =res['response'].confirmed_date;
      this.date_of_joining = res['response'].date_of_joining;
      this.offer_validity_date = res['response'].offer_validity_date;
      this.job_location = res['response'].job_location;
      this.candidate_address = res['response'].candidate_address;
      console.log(this.result);
    });


  }
}

