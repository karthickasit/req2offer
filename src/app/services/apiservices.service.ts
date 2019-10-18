import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  //x: any = 'http://192.168.2.109:5007/';
  //x: any = 'http://192.168.2.37:5007/';

  // x: any = 'http://192.168.2.37:5007/';

  // x: any = 'http://192.168.2.109:5007/';

  x: any = 'http://localhost:5007/';




  constructor(private http: HttpClient) { }
  login(data) {
    return this.http.post(this.x +  'login', data);
  }
change_password(d)
{
  return this.http.put(this.x +  'changepassword', d);
}
  set_password(data) {
    return this.http.put(this.x + 'setpassword', data);
  }

  get_businessunit() {
    return this.http.get(this.x + 'businessunit');
  }
  get_subbusinessunit() {
    return this.http.get(this.x + 'subbusinessunit');
  }
  get_costcenter() {
    return this.http.get(this.x + 'costcenter');
  }
  get_employeelist() {
    return this.http.get(this.x + 'employeetypelist');
  }
  get_roles() {
    return this.http.get(this.x + 'roles');
  }

  get_user_id(emp_id) {
    return this.http.get(this.x + 'adduser?employee_id=' + emp_id);

  }
  get_profile_byid(id) {
    return this.http.get(this.x + 'viewprofile?user_id=' + id);
  }
  get_userlist() {
    return this.http.get(this.x + 'userslist?count=20&&page=1');
  }

  post_adduser(data) {
    return this.http.post(this.x + 'adduser', data);
  }
  delete_user(emp_id) {
    return this.http.delete(this.x + 'deleteuser/' + emp_id);
  }
  put_adduser(data) {
    return this.http.put(this.x + 'adduser', data);
  }
  get_reporting_manager(){
    return this.http.get(this.x + 'reportingmanagers');
  }
  get_internalreqlist(page) {
    return this.http.get(this.x + 'internalreqlist?page=' + page + '&&count=10');
  }
  get_internalreqs(empid, page) {
    console.log(empid);
    return this.http.get(this.x + 'myinternals?page=' + page + '&&count=10&&user_id=' + empid); // my req int.
  }
  post_internalreq(data) {
    return this.http.post(this.x + 'internalreq', data);
  }
  delete_internalreq(id) {
    return this.http.delete(this.x + 'internalreq?int_req_id=' + id);
  }
  put_interalreq(data) {
    return this.http.put(this.x + 'internalreq', data);
  }
  get_internalreqby_id(i) {
    return this.http.get(this.x + 'internalreq?req_id=' + i);
  }
  get_customerlist() {
    return this.http.get(this.x + 'customerlist?page=1&&count=40');
  }

  post_customer(data) {
    return this.http.post(this.x + 'customer', data);
  }

  get_customerbyid(id) {
    return this.http.get(this.x + 'customer?customer_id=' + id);
  }
  put_cutomer(data) {
    return this.http.put(this.x + 'customer' , data);
  }
  delete_customer(id) {
    return this.http.delete(this.x + 'deletecustomer/' + id);

  }
  // bdm external Component
  get_accountmanager() {
    return this.http.get(this.x + 'accountmanager');
  }

  view_externlareq(page) {
    return this.http.get(this.x + 'viewexternalreq?page= ' + page + '&&count=10');
  }
post_externalreq(data) {
    return this.http.post(this.x + 'externalreq', data);
  }
  get_particaular_externalreq(req_id) {
    return this.http.get(this.x + 'externalreq?external_id=' + req_id); // MY EXT RE
  }
put_externalreqdetails(updateddata) {
  return this.http.put(this.x + 'externalreq' , updateddata);
}
delete_externalreq(reqid) {
  console.log(reqid);
  return this.http.delete(this.x + 'externalreq?external_id=' + reqid);
}
get_reqlist_id(user_id, page) {
  return this.http.get(this.x + 'myexternals?count=10&&user_id=' + user_id + '&&page=' + page); // my req ext.
}
get_reqlist_id1(page, user_id) {
  return this.http.get(this.x + 'myexternals?page=' + page + '&&count=10&&user_id=' + user_id); // my req ext.
}
get_selectedcandid_byid(id) {
  return this.http.get(this.x + 'hr=' + id);
}
get_selectedlist() {
  return this.http.get(this.x + 'hr');
}
get_selectedcandid_byrefid(id) {
  return this.http.get(this.x + 'confirmedcandidatebyreqid?req_id=' + id);

}
get_approvalinternalreq_byuserid(user_id, page) {
  return this.http.get(this.x + 'internalapprovals?user_id=' + user_id + '&&count=10&&page=' + page);
}


// Hr selected candidates
// 30-7-19
get_SelectedCandidates_list_HR() {
  return this.http.get(this.x + 'hr');  //used for Hr selected candidates List View
}


//i don't know weather this api is correct or not ??
getHrSelectedList() {
  return this.http.get(this.x + 'hr');
}

// even this api is changed please check this api and remove if its no use
confirmedCandidate(id) {
  return this.http.get(this.x + 'confirmedcandidatebyreqid?req_id=' + id);
}
savetagSelectedCandidate(formData){
  return this.http.post(this.x + "hr", formData)
}
generateSalaryBreakPdf(id){
  return this.http.post(this.x + 'salarybreakup?employee_id=' + id, '');
}
generateOfferLetterPdf(id){
  return this.http.post(this.x + 'offerletter?employee_id=' + id, '');
}
generateOfferEmail(formData){
  return this.http.post(this.x + 'sendoffer', formData)
}

// account dashboard

view_account(id){
  return  this.http.get(this .x  + 'selectedcandidatebyid?reference_number=' + id);
}

get_account(empId) {

  return this.http.get(this.x + 'selectedcandidatesbyraisedid?raised_by=' + empId);

}

getfeedbacklist(id) {
  return this.http.get('feedback?req_id=' + id)
}

get_approvalexternalreq_byuserid(user_id,page) {
  return this.http.get(this.x + 'externalapprovals?user_id=' + user_id + '&&count=10&&page=' + page);
}

post_approvaldetails(data) {
  return this.http.post(this.x + 'reqstatus', data);
}
account_delete() {
  return this.http.delete(this.x + 'myexternals?user_id=19259');
}


//TAG API's
getTAGExternalReqs(){
  return this.http.get(this.x +'externalapprovedtagreqs');
}
getTAGExternalReqsById(id){
  return this.http.get(this.x + 'externalapprovedreqbyid?req_id='+ id);
}
saveTAGExternalReqsraisedBy(formData){
  return this.http.post(this.x + 'selectedcandidate', formData);
}
getTAGInternalReqs(){
  return this.http.get(this.x +'internalapprovedtagreqs');
}
getTagInternalReqsById(id){
  return this.http.get(this.x +'internalapprovedtagreqs?req_id='+id)
}
getSelectedCandidates() {
  return this.http.get(this.x + 'selectedcandidate');
}
createSelectedCandidate(formData){
  return this.http.post(this.x + 'selectedcandidate', formData);
}
createResume(email, formData){
  return this.http.put(this.x + 'resume?email='+email, formData)
}
// 30-7-19 // this api is for getting selected candidates details for tag by using Req Id

get_selectedCadidates_Details_ById(req_id) {
  return this.http.get(this.x + 'selectedcandidatebyid?req_id=' + req_id​​​​​​​ );
}
deleteSelectedCandidates(id){
  return this.http.delete(this.x + 'hr?req_id=' +id)
}
feedbacks(i){
  return this.http.get(this.x +'feedback?req_id=' + i )
}

}
