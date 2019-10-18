import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import Swal from'sweetalert2';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-selectedcandidate',
  templateUrl: './selectedcandidate.component.html',
  styleUrls: ['./selectedcandidate.component.scss']
})
export class SelectedcandidateComponent implements OnInit {
  getCandidateList : any;
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
  req_id : any;
  raisedBy: any;
  bool: any = false;
  constructor( private apiservice: ApiservicesService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.getSelectedCandidatesList();
  }

  getSelectedCandidatesList( ) {
    this.apiservice.getSelectedCandidates().subscribe(res => {
      console.log(res);
      if (res['status_code'] === 200) {
        this.bool = true;
        this.getCandidateList = res['Response'];
      this.spinner.hide();
    } else {
      this.bool = false;
      this.spinner.hide();
    }
    });
  }

  getCandidateById(id, raisedby) {
    this.spinner.show();
    this.req_id = id;
    this.raisedBy = raisedby;
    this.apiservice.get_selectedCadidates_Details_ById(id).subscribe(res => {
      this.spinner.hide();
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
    })
  }

  deleterecord(i) {
    this.spinner.show();
    Swal.fire({
    title: 'Are you sure?',
    text: 'You won"t be able to revert this!',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
    if (result.value) {
    this.apiservice.deleteSelectedCandidates(i).subscribe(res => {
      this.spinner.hide();
    console.log(res);
    this.getSelectedCandidatesList();
    this.router.navigate(['/tag/selectedcandidate']);
    });
    Swal.fire(
    'Deleted!',
    'Your file has been deleted.',
    'success'
    );
    } else if (
    // Read more about handling dismissals
    result.dismiss === Swal.DismissReason.cancel
    ) {
    Swal.fire(
    'Cancelled',
    'Your imaginary file is safe :)',
    'error'
    );
    }
    });
    }

}
