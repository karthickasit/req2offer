import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import { Router } from '@angular/router';
import Swal from'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-tagselectedcandidate',
  templateUrl: './tagselectedcandidate.component.html',
  styleUrls: ['./tagselectedcandidate.component.scss']
})
export class TagselectedcandidateComponent implements OnInit {

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
  employee_id: any;
  saveReq_id : any;
  saveRaisedBy: any;
  designation: any;
  ctc: any;
  date_of_joining: any;
  offer_validity_date: any;
  bool: any = false;
  constructor( private apiservice: ApiservicesService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {

    this.spinner.show();
    this.getSelectedCandidatesList();


  }

  getSelectedCandidatesList() {
    this.apiservice.getSelectedCandidates().subscribe(res => {
      this.spinner.hide();
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

  getReqId(id) {
    this.req_id = id;
  }

  saveTAGSelectedCandidate(formData){
    this.spinner.show();
    console.log(formData)
    // var resObj = {};
    this.apiservice.savetagSelectedCandidate(formData).subscribe(res => {
        console.log(res);
        
        if(res['status'] === "success"){
          var employee_id = res['employee_id'];
          this.apiservice.generateSalaryBreakPdf(employee_id).subscribe(res => {
          this.spinner.hide();
            console.log(res);
          })
        }
        if(res['status'] === "success"){
         
          this.apiservice.generateOfferLetterPdf(employee_id).subscribe( res => {
            console.log(res);
          })
        }
        this.getSelectedCandidatesList();
    })
    
  }

  getCandidateById(id, raisedby){
    this.saveReq_id = id;
    this.saveRaisedBy = raisedby;
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
    })
  }

  deleterecord(i) {
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
    console.log(res);
    this.getSelectedCandidatesList();
    this.router.navigate(['/hr/tag_selected_candidates']);
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
