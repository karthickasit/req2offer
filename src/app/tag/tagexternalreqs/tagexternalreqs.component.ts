import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import { Router } from '@angular/router';
import Swal from'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";

declare var $: any;

@Component({
  selector: 'app-tagexternalreqs',
  templateUrl: './tagexternalreqs.component.html',
  styleUrls: ['./tagexternalreqs.component.scss']
})
export class TagexternalreqsComponent implements OnInit {

  constructor(private apiservice: ApiservicesService, private routerNavigator: Router, private spinner: NgxSpinnerService) { }

  getExternalReqList: any ;
  contact_number: any;
  customer_approved_budget: any;
  customer_name: any;
  date_of_joining: any;
  job_location: any;
  raisedBy: any;
  req_id: any;
  request_raised_date: any;
  skills: any;
  years_of_experience: any;

  saveReq_id :any;
  saveRaisedBy :any;
  candidate_name: any;
  candidate_type: any;
  technology: any;
  others: any
  experience: any
  interviewer: any
  interview_date: any;
  email: any;
  contact_number_save: any;
  candidate_address: any;
  resumeData: any;
  candidateTypeData: any;
  typeCandidate: any;
  years: any;
  months: any;
  selectedYears: any;
  selectedMonths: any;
  saveRaisedEmpId: any;
  bool: any = false;

  ngOnInit() {
    this.spinner.show();
    this.getTagExternalList();
    this.getCandidateList();
    this.getyears();
    this.getMonths();
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

  getTagExternalList() {
    this.apiservice.getTAGExternalReqs().subscribe( res => {
       console.log(res);
       if (res['status_code'] === 200) {
        this.bool = true;
        this.getExternalReqList = res['response'];

      this.spinner.hide();
    } else {
      this.bool = false;
      this.spinner.hide();
    }
      });
  }

  // pagechange(event){
  //   this.currentpage = event;
  //   this.getTagExternalList();
  // }

  candidateById(reqId){
    this.spinner.show();
    this.apiservice.getTAGExternalReqsById(reqId).subscribe( res => {
      console.log(res['response']);
      this.spinner.hide();
      this.contact_number = res['response']['contact_number'];
      this.customer_approved_budget = res['response']['customer_approved_budget'];
      this.customer_name= res['response']['customer_name'];
      this.date_of_joining= res['response']['date_of_joining'];
      this.job_location= res['response']['job_location'];
      this.raisedBy= res['response']['raisedBy'];
      this.req_id= res['response']['req_id'];
      this.request_raised_date= res['response']['request_raised_date'];
      this.skills= res['response']['skills'];
      this.years_of_experience= res['response']['years_of_experience'];
    })
    
  }

  getSelectedList(req_id, raisedBy, raised_Emp_id){
      this.saveReq_id = req_id;
      this.saveRaisedBy = raisedBy;
      this.saveRaisedEmpId= raised_Emp_id;
      console.log(this.saveRaisedBy);
  }
   getCandidateList(){
     this.apiservice.get_employeelist().subscribe(res => {
       this.candidateTypeData = res['employee_type'];
       console.log(this.candidateTypeData);
       console.log(res);
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
    resObj['raised_by']= this.saveRaisedEmpId;
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
      console.log(res);
      this.spinner.hide();
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
            this.getTagExternalList();
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