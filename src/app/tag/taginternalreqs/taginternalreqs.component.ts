import { Component, OnInit} from '@angular/core';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import { Router } from '@angular/router';
import Swal from'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
declare var $: any;

@Component({
  selector: 'app-taginternalreqs',
  templateUrl: './taginternalreqs.component.html',
  styleUrls: ['./taginternalreqs.component.scss']
})
export class TaginternalreqsComponent implements OnInit {

  getTagInternalList: any;
  bu_name: any;
  contact_number: any;
  cost_center_id: any;
  date_of_joining: any;
  employee_type: any;
  raisedBy: any;
  req_id: any;
  skills: any;
  years_of_experience: any;
  experience: any;
  resumeData: any;
  saveReq_id :any;
  saveRaisedBy: any;
  selectedYears :any;
  selectedMonths: any;
  years :any;
  months: any;
  candidate_name: any;
  typeCandidate: any;
  technology: any;
  others: any;
  interviewer: any;
  interview_date: any;
  email: any;
  contact_number_save: any;
  candidate_address: any;
  candidateTypeData: any;
  raisedEmpId: any;
  bool: any = false;

  constructor(private apiservice: ApiservicesService, private routerNavigator: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.getTagInternalReqs();
    this.getCandidateList();
    this.getMonths();
    this.getyears();
  }
  getCandidateList(){
    this.apiservice.get_employeelist().subscribe(res => {
      this.spinner.hide();
      this.candidateTypeData = res['employee_type'];
      console.log(this.candidateTypeData);
      console.log(res);
    })
  }

  getyears(){
    this.years =[{
      "id": 0,
      "years": 0
    }]

    for(var i=1; i<=30; i++){
      this.years.push({"id": +i,"years": +i})
    }
    console.log(this.years)
  }

  getMonths() {
    this.months = [{
      "id": 0,
      "months": 0
    }]
    for(var i=1; i<=11; i++){
      this.months.push({"id": +i,"months": +i})
    }
    console.log(this.months)
  }


  getSelectedList(req_id, raisedBy, raised_emp_id){
    this.saveReq_id = req_id;
    this.saveRaisedBy = raisedBy;
    this.raisedEmpId = raised_emp_id;
}

  getTagInternalReqs() {
    this.apiservice.getTAGInternalReqs().subscribe(res => {
      console.log(this.getTagInternalList);
      if (res['status_code'] === 200) {
        this.bool = true;
        this.getTagInternalList = res['response'];
        this.spinner.hide();
    } else {
      this.bool = false;
      this.spinner.hide();
    }
    });
  }

  internalReqById(reqId){
    this.spinner.show();
    this.apiservice.getTagInternalReqsById(reqId).subscribe( res => {
      this.spinner.hide();
      console.log(res['response'][0]);
      this.bu_name =  res['response'][0]['bu_name'];
      this.contact_number = res['response'][0].contact_number;
      this.cost_center_id = res['response'][0].cost_center_id;
      this.date_of_joining = res['response'][0].date_of_joining;
      this.employee_type = res['response'][0].employee_type;
      this.raisedBy = res['response'][0].raisedBy;
      this.req_id = res['response'][0].req_id;
      this.skills = res['response'][0].skills;
      this.years_of_experience = res['response'][0].years_of_experience;
    })
    
  }

  getSelectedValueId(args){
    this.typeCandidate = args.target.value;  
    console.log(this.typeCandidate);
  }
  getSelectedYears(args){
    this.selectedYears = args.target.value;  
    console.log(this.selectedYears);
  }
  getSelectedMonths(args){
    this.selectedMonths = args.target.value;  
    console.log(this.selectedMonths);
  }
  

  saveCandidateList(){
    this.spinner.show();
    this.experience = this.selectedYears + " Years " + this.selectedMonths + " Months";
    console.log(this.experience);
    var resObj = {};
    resObj['req_id'] = this.saveReq_id;
    resObj['raised_by']= this.raisedEmpId;
    resObj['candidate_name'] = this.candidate_name;
    resObj['candidate_type'] = this.typeCandidate;
    resObj['technology'] = this.technology;
    resObj['others'] = this.others;
    resObj['experience'] = this.experience;
    resObj['interviewer'] = this.interviewer;
    resObj['interview_date'] = this.interview_date;
    resObj['email'] = this.email;
    resObj['contact_number'] = this.contact_number_save;
    resObj['candidate_address'] = this.candidate_address;
    this.apiservice.createSelectedCandidate(resObj).subscribe(res => {
      this.spinner.hide();
      console.log(res);
      if(res['message']="success"){
        debugger;
        const email = res['email']
        console.log(this.resumeData);
        const formData = new FormData();
        formData.append('file', this.resumeData);
        this.apiservice.createResume(email,formData).subscribe(res => {
          console.log(res);
          if(res['status_code'] === 200){
            $('#myView1').modal('hide');
            Swal.fire(
              "Applied TAG Internal REQ'S..!",
              "Successfully Added TAG Internal REQ's",
              "success"
            );
            this.getTagInternalReqs();
          }
          
        })   
      }
    })
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.resumeData = file;
      console.log(this.resumeData);
    }
  }


}
