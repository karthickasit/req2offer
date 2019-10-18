import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-selected-candidates',
  templateUrl: './selected-candidates.component.html',
  styleUrls: ['./selected-candidates.component.scss']
})
export class SelectedCandidatesComponent implements OnInit {
  req_id: any;
  candidate_name: any;
  candidate_type: any;
  confirmed_date: any;
  contact_number: any;
  date_of_joining: any;
  designation: any;
  email: any;
  employee_id: any;
  experience: any;
  job_location: any;
  offer_validity_date: any;
  others: any;
  technology: any;
  selectedcandidates: any;
  bool: any = false;

  constructor(private http: HttpClient, private as: ApiservicesService,private spinner: NgxSpinnerService) {}
  ngOnInit() {
    this.spinner.show();
    this.gethrSelectedCandidates();
  }
  gethrSelectedCandidates() {
    this.as.get_SelectedCandidates_list_HR().subscribe(res => {
      console.log (res);
      if (res['status_code'] === 200) {
        this.selectedcandidates = res['response'];
        this.bool = true;
        this.spinner.hide();
        console.log(res['response']);
      } else {
        if ( res['status_code'] === 204) {
          this.bool = false;
          this.spinner.hide();
        }
      }
  });
}
  view(data){
    console.log(data);
    this.req_id=data['req_id'];
    this.candidate_name=data['candidate_name'];
    this.candidate_type=data['candidate_type'];
    this.confirmed_date=data['confirmed_date'];
    this.contact_number=data['contact_number'];
    this.date_of_joining=data['date_of_joining'];
    this.designation=data['designation'];
    this.email=data['email'];
    this.employee_id=data['employee_id'];
    this.experience=data['experience'];
    this.job_location=data['job_location'];
    this.offer_validity_date=data['offer_validity_date'];
    this.others=data['others'];
    this.technology=data['technology'];

  }

}
