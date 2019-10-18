import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import Swal from'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr-selected-candidate',
  templateUrl: './hr-selected-candidate.component.html',
  styleUrls: ['./hr-selected-candidate.component.scss']
})
export class HrSelectedCandidateComponent implements OnInit {
  candidates: any;
  result: any;
  candidate_name: any;
  candidate_type: any;
  contact_number: any;
  email: any;
  experience: any;
  req_id: any;
  raised_by: any;
  technology: any;
  ctc: any;
  candidate_address :any;
  emp_id: any;
  date_of_joining: any;
  confirmed_date: any;
  offer_validity_date: any;
  designation: any;
  job_location: any;
  confirmMail: any = false;
  radioValue: any;
  mailConfirmation: any = null;
  bool: any = false;
  constructor(private dataService: ApiservicesService, private spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit() {
    this.spinner.show();
    this.getSelectedCandidates();
  }


  getSelectedCandidates() {
    this.dataService.getHrSelectedList().subscribe(res => {
      console.log(res);
      if (res['status_code'] === 200) {
        this.bool = true;
      this.candidates = res['response'];
      this.spinner.hide();
    } else {
      this.bool = false;
      this.spinner.hide();
    }
    });
  }

  candidateById(id, raised_by, emp_id) {
    this.spinner.show();
      this.req_id = id;
      this.raised_by = raised_by;
      this.emp_id = emp_id;
      console.log(this.emp_id);
      this.dataService.confirmedCandidate(id).subscribe (res => {
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
  confirmSendMail(event) {
    console.log(event.target.value);
    this.radioValue = event.target.value;
    if(this.radioValue == 'salaryBreak'){
      this.confirmMail = true;
    }
    if(this.radioValue == 'offerLetter'){
      this.confirmMail = true;
    }
    // this.confirmMail = event.target.checked;
  }
  confirmEmail(){
    this.spinner.show();
    var resObj = {};
    resObj['employee_id'] = this.emp_id;
    resObj['role_id'] = parseInt(localStorage.getItem('role_id'));
    resObj['file_name'] = this.radioValue;
    console.log(resObj)
    this.dataService.generateOfferEmail(resObj).subscribe(res => {
      this.spinner.hide();
      Swal.fire(
        'Please check your Email..!!',
        'Offer letter Sent to your Mail Id',
        'success'
      );
      this.router.navigate['/hr/hr_selected_candidets'];
      this.mailConfirmation = null;
      console.log(res);
    })
  }

}
