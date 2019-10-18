import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HrmsService {
  x:string ='http://192.168.2.109:5007/';

  // getPassportCenter(arg0: any): any {
  //   throw new Error("Method not implemented.");
  // }
  constructor(private http:HttpClient) { }

  // setSubbusinessunit(requestObject) {
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/service/subbusinessunit/set",requestObject);
  // }

  // getSubbusinessUnit(requestObject){
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/service/subbusinessunit/get",requestObject);
  // }
  // updateSubbusinessUnit(updateReqObj){
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/service/subbusinessunit/set",updateReqObj);
  // }
  // deleteSubbusinessUnit(deleteReqObj){
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/service/subbusinessunit/set",deleteReqObj);
  // }

  // setCostcenter(costcenterReqObj) {
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/costcenter/set",costcenterReqObj);
  // }

  // getCostcenter(costcenterReqObj) {
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/costcenter/get",costcenterReqObj);
  // }
  // updateCostCenter(updatedData){
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/costcenter/set",updatedData);
  // }

  // deleteCostCenter(deleteData){
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/costcenter/set",deleteData);
  // }

  // setBusinessunit(busiessunitReqObj){
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/businessUnit/service/set",busiessunitReqObj);
  // }

  //getBusinessunit(busiessunitReqObj){
    //return this.http.post("http://192.168.1.95:8080/ojas-obs-online/businessUnit/service/get",busiessunitReqObj);
  //}
//   updateBusinessunit(buupdateReqObj){
//     return this.http.post("http://192.168.1.95:8080/ojas-obs-online/businessUnit/service/set",buupdateReqObj);
//   }
//   deleteBusiness(buDeleteReqObj){
//     return this.http.post("http://192.168.1.95:8080/ojas-obs-online/businessUnit/service/set",buDeleteReqObj);
//   }
//   setEmployeeStatus(EmpStatusReqObj){
//     return this.http.post("http://192.168.1.95:8080/ojas-obs-online/obs/emplyoeestatus/set",EmpStatusReqObj);
//   }

//   getEmployeeStatus(EmpStatusReqObj){
//     return this.http.post("http://192.168.1.95:8080/ojas-obs-online/obs/emplyoeestatus/get",EmpStatusReqObj);
//   }
//   updateEmployeeStatus(updateEmpStatus){
//     return this.http.post("http://192.168.1.95:8080/ojas-obs-online/obs/emplyoeestatus/set",updateEmpStatus);
//   }
//   deleteEmployeeStatus(deleteEmpStatus){
//     return this.http.post("http://192.168.1.95:8080/ojas-obs-online/obs/emplyoeestatus/set",deleteEmpStatus);
//   }

//   setEmployeeDesignation(EmpDesignationReqObj){
//     return this.http.post("http://192.168.1.95:8080/ojas-obs-online/designation/service/set",EmpDesignationReqObj);
//   }

//   getEmployeeDesignation(EmpDesignationReqObj){
//     return this.http.post("http://192.168.1.95:8080/ojas-obs-online/designation/service/get",EmpDesignationReqObj);
//   }

//   updateEmpolyeeDesignation(updatedData){
//     return this.http.post("http://192.168.1.95:8080/ojas-obs-online/designation/service/set",updatedData);
//   }

//   deleteEmpolyeeDesignation(deleteData){
//     return this.http.post("http://192.168.1.95:8080/ojas-obs-online/designation/service/set",deleteData);
//   }
//   setPassportCeneter(PassportReqObj){
//     return this.http.post("http://192.168.1.95:8080/ojas-obs-online/passport/set",PassportReqObj);
//   }

//   getPassportCeneter(PassportReqObj){
//     return this.http.post("http://192.168.1.95:8080/ojas-obs-online/passport/get",PassportReqObj);
//   }
//   updatePassportCenter(PassportupdateObj){
//     return this.http.post("http://192.168.1.95:8080/ojas-obs-online/passport/set",PassportupdateObj);
//   }
//   deletepassportCenter(PassportdeleteObj){
//     return this.http.post("http://192.168.1.95:8080/ojas-obs-online/passport/set",PassportdeleteObj);
//   }
// setStateList(StateReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/states/set",StateReqObj);
// }
//  getStatusList(StategetReqObj){
//    return this.http.post("http://192.168.6.186:8089/obs/states/get",StategetReqObj);
//  }
//  updateStateList(updatestateData){
//    return this.http.post("http://192.168.6.186:8089/obs/states/set",updatestateData);
//  }
//  deleteStateList(deleteStateData){
//    return this.http.post("http://192.168.6.186:8089/obs/states/set",deleteStateData);
//  }
//  setGpaData(GpaReqObj){
//   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/gpa/set",GpaReqObj);
// }
//  getGpaData(GpagetReqObj){
//    return this.http.post("http://192.168.1.95:8080/ojas-obs-online/gpa/get",GpagetReqObj);
//  }
//  updateGpaData(GpaupdateReqObj){
//    return this.http.post("http://192.168.1.95:8080/ojas-obs-online/gpa/set",GpaupdateReqObj);
//  }
//  deleteGpaData(GpadeleteData){
//    return this.http.post("http://192.168.1.95:8080/ojas-obs-online/gpa/set",GpadeleteData);
//  }
//  setEmployeeEducation(EmpSaveData){
//    return this.http.post("http://192.168.1.95:8080/ojas-obs-online/education/set",EmpSaveData);
//  }
//  getEmployeeEducation(EmpEduGetData){
//    return this.http.post("http://192.168.1.95:8080/ojas-obs-online/education/get",EmpEduGetData);
//  }
//  updatedEmployeeEducation(EmpEduUpdateData){
//    return this.http.post("http://192.168.1.95:8080/ojas-obs-online/education/set",EmpEduUpdateData);
//  }
//  deleteEmployeeEducation(EmpEduDeleteData){
//    return this.http.post("http://192.168.1.95:8080/ojas-obs-online/education/set",EmpEduDeleteData);
//  }
//  setRoleManagement(RoleReqObj){
//    return this.http.post("http://192.168.1.95:8080/ojas-obs-online/role/set",RoleReqObj);
//  }
//  getRoleManagement(RoleGetReqObj){
//    return this.http.post("http://192.168.1.95:8080/ojas-obs-online/role/get",RoleGetReqObj);
//  }
//  updateRoleManagement(RoleUpdate){
//    return this.http.post("http://192.168.1.95:8080/ojas-obs-online/role/set",RoleUpdate);
//  }
//  dleteRoleManagement(RoleDelete){
//    return this.http.post("http://192.168.1.95:8080/ojas-obs-online/role/set",RoleDelete);
//  }
//  saveSeperationType(setSepertionResObj){
//    return this.http.post("http://192.168.1.95:8080/ojas-obs-online/separationType/set",setSepertionResObj);
//  }
//  getSeperationType(getSeperationResObj){
//    return this.http.post("http://192.168.1.95:8080/ojas-obs-online/separationType/get",getSeperationResObj);
//  }
//  updateSeperationType(updateSeperationResObj){
//    return this.http.post("http://192.168.1.95:8080/ojas-obs-online/separationType/set",updateSeperationResObj);
//  }
//  deleteSeperationType(deleteSeperationResObj){
//    return this.http.post("http://192.168.1.95:8080/ojas-obs-online/separationType/set",deleteSeperationResObj);
//  }
//  //skill starts

//  setSkillMaster(skillmasterReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/skill/set",skillmasterReqObj)
// }
// getSkillmaster(getskillmasterReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/skill/get",getskillmasterReqObj)
// }
// updateSkillMaster(updateskillmasterReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/skill/set",updateskillmasterReqObj)
// }
// deleteSkillMaster(deleteskillmasterReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/skill/set",deleteskillmasterReqObj)
// }


//skill ends


 //contact starts
//  setContactInfo(contactReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/employeecontactinfo/set",contactReqObj)
// }
// getContactInfo(getConReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/employeecontactinfo/get",getConReqObj)
// }
// updateContactInfo(updateConReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/employeecontactinfo/set",updateConReqObj)
// }
// deleteContactInfo(deleteConReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/employeecontactinfo/set",deleteConReqObj)
// }
// getcontactbyId(editConReg){
//   return this.http.post("http://192.168.6.186:8089/obs/employeecontactinfo/get",editConReg)
// }
//contact ends



//certification starts
// setCertification(certificationReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/certifications/setCertificationDetails",certificationReqObj)
// }
// getCertification(getcertificationReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/certifications/getCertificationDetails",getcertificationReqObj)
// }
// updateCertification(updatecertificationReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/certifications/setCertificationDetails",updatecertificationReqObj)
// }
// deleteCertification(deletecertificationReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/certifications/setCertificationDetails",deletecertificationReqObj)
// }
// getCertificationbyId(editcertificationReg){
//   return this.http.post("http://192.168.6.186:8089/obs/certifications/getCertificationDetails",editcertificationReg)
// }
// //certification ends

//skill starts
// setSkill(skillReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/employeeskilldetails/set",skillReqObj)
// }
// getSkill(getskillReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/employeeskilldetails/get",getskillReqObj)
// }
// updateSkill(updateskillReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/employeeskilldetails/set",updateskillReqObj)
// }
// deleteSkill(deleteskillReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/employeeskilldetails/set",deleteskillReqObj)
// }
// getSkilbyId(editskillReg){
//   return this.http.post("http://192.168.6.186:8089/obs/employeeskilldetails/get",editskillReg)
// }

//skill ends




 

// bu starts-----
// getBusinessunit(businesinfo){
//   return this.http.post("http://192.168.6.186:8089/obs/employeebu/get",businesinfo);
// }
// savebusinesunit(savebusines){
//   return this.http.post("http://192.168.6.186:8089/obs/employeebu/set",savebusines);
// }
// deletebusinessunit(deleteBusinessUnitObj){
//   return this.http.post("http://192.168.6.186:8089/obs/employeebu/set",deleteBusinessUnitObj);
// }
// updatebusinesunit(updatebusinesobj){
//   return this.http.post("http://192.168.6.186:8089/obs/employeebu/set",updatebusinesobj);
// }
// getbyIdbusines(updatebusinesobj){
//   return this.http.post("http://192.168.6.186:8089/obs/emplyeebu/get",updatebusinesobj);
// }
// bu ends-----------



// emp basic--------

// getempinfo(basicempinfo){
//   return this.http.post("http://192.168.6.186:8089/obs/employeeInfo/get",basicempinfo);
// }
// saveempinfo(saveempobj){
//   return this.http.post("http://192.168.6.186:8089/obs/employeeInfo/set",saveempobj);
// }
// updateempInfo(updateempobj){
//   return this.http.post("http://192.168.6.186:8089/obs/employeeInfo/set",updateempobj);
// }
// deleteempinfo(deleteempobj){
//   return this.http.post("http://192.168.6.186:8089/obs/employeeInfo/set",deleteempobj)
// }
// getbyIdempinfo(updateempobj){
//   return this.http.post("http://192.168.6.186:8089/obs/employeeInfo/get",updateempobj);
// }
// updateempinfo(updateempinfoobj){
//   return this.http.post("http://192.168.6.186:8089/obs/employeeInfo/set",updateempinfoobj);
// }
// getempstatus(statusempobj){
//   return this.http.post("http://192.168.6.186:8089/obs/EmployeeStatus/get",statusempobj);
// }
// getGenderinfo(getgenderobj){
//   return this.http.post("http://192.168.6.186:8089/obs/genders/get",getgenderobj);
// }
// emp basic ends ---------//


//----Employee Experience Details ------------http://192.168.6.186:8089
// getEmployeeExperienceDetails(getEmpExperienceObj)
// {
//   return this.http.post("http://192.168.6.186:8089/obs/EmployeeExperienceDetails/get",getEmpExperienceObj);
// }

// saveEmployeeExperienceDetails(setEmpExperienceObj)
// {
//   return this.http.post("http://192.168.6.186:8089/obs/EmployeeExperienceDetails/set",setEmpExperienceObj);
// }

// editEmpExpDetails(editEmpExpobj)
// {
//   return this.http.post("http://192.168.6.186:8089/obs/EmployeeExperienceDetails/get",editEmpExpobj);
// }

// updateEmployeeExperienceDetails(updateEmpExperienceObj)
// {
//   return this.http.post("http://192.168.6.186:8089/obs/EmployeeExperienceDetails/set",updateEmpExperienceObj);
// }

// deleteEmployeeExperienceDetails(deleteEmpExperienceObj)
// {
//   return this.http.post("http://192.168.6.186:8089/obs/EmployeeExperienceDetails/set",deleteEmpExperienceObj);
// }

//----Employee Experience ends--------------



//----Employee KYE Details  Starts-----------

// getEmployeeKyeDetails(getEmpkyeObj)
// {
//   return this.http.post("http://192.168.6.186:8089/obs/kye/get",getEmpkyeObj);
// }

// saveEmployeeKyeDetails(saveEmpKyeObj)
// {
//   return this.http.post("http://192.168.6.186:8089/obs/kye/set",saveEmpKyeObj);
// }

// editEmployeeKyeDetails(editkyeobj)
// {
//   return this.http.post("http://192.168.6.186:8089/obs/kye/get",editkyeobj);
// }

// updateEmployeeKyeDetails(updatekyeobj)
// {
//   return this.http.post("http://192.168.6.186:8089/obs/kye/set",updatekyeobj);
// }

// deleteEmployeeKyeDetails(deleteEmpKyeObj)
// {
//   return this.http.post("http://192.168.6.186:8089/obs/kye/set",deleteEmpKyeObj);
// }

 //----Employee KYE Ends------------


 
//----Employee Title Details Starts----------

// getEmpTitleDetails(getEmptitleObj)
// {
//   return this.http.post("http://192.168.6.186:8089/obs/employeetitle/get",getEmptitleObj);
// }

// saveEmpTitleDetails(saveEmpTiltle)
// {
//   return this.http.post("http://192.168.6.186:8089/obs/employeetitle/set",saveEmpTiltle);
// }

// editEmpTitleDetails(editTitlebj)
// {
//   return this.http.post("http://192.168.6.186:8089/obs/employeetitle/get",editTitlebj);
// }

// updateEmpTitleDetails(updateTitleobj)
// {
//   return this.http.post("http://192.168.6.186:8089/obs/employeetitle/set",updateTitleobj);
// }

// deleteEmpTitleDetails(deleteEmpTitleObj)
// {
//   return this.http.post("http://192.168.6.186:8089/obs/employeetitle/set",deleteEmpTitleObj);
// }

 //----Employee Title Ends------------



 //----Employee Education starts------------

// getEmpEduDetails(getEmpEduObj)
// {
//   return this.http.post("http://192.168.6.186:8089/obs/employeeEducationDetails/get",getEmpEduObj);
// }

// saveEmpEduDetails(saveEmpEdu)
// {
//   return this.http.post("http://192.168.6.186:8089/obs/employeeEducationDetails/set",saveEmpEdu);
// }

// editEmpEduDetails(editEduobj)
// {
//   return this.http.post("http://192.168.6.186:8089/obs/employeeEducationDetails/get",editEduobj);
// }

// updateEmpEduDetails(updateEduobj)
// {
//   return this.http.post("http://192.168.6.186:8089/obs/employeeEducationDetails/set",updateEduobj);
// }

// deleteEmpEduDetails(deleteEmpEduObj)
// {
//   return this.http.post("http://192.168.6.186:8089/obs/employeeEducationDetails/set",deleteEmpEduObj);
// }

 //----Employee Education Ends------------
 
 //start dependent details
// getdependentdetails(dependentdetailsResobj){
//   return this.http.post("http://192.168.6.186:8089/obs/DependentDetailsService/get",dependentdetailsResobj);
// }
// savedependentdetails(saveddependentdetailsResObj){
//   return this.http.post("http://192.168.6.186:8089/obs/DependentDetailsService/set",saveddependentdetailsResObj);
// }
// deletedependentdetails(deletedependentdetailsResObj){
//   return this.http.post("http://192.168.6.186:8089/obs/DependentDetailsService/set",deletedependentdetailsResObj);
// }
// updatedependentdetails(updatedependentdetailsResObj){
//   return this.http.post("http://192.168.6.186:8089/obs/DependentDetailsService/set",updatedependentdetailsResObj);
// }
//endsdependent details
//start bank deatils
// getbankserverdetails(getbankdetailsResobj){
//   return this.http.post("http://192.168.6.186:8089/obs/BankDetails/getAll",getbankdetailsResobj);
// }
// savebankdetails(savebankdetailsResobj){
//   return this.http.post("http://192.168.6.186:8089/obs/BankDetails/set",savebankdetailsResobj);
// }
//  deletebankdetails(deletebankdetailsResObj){
//   return this.http.post("http://192.168.6.186:8089/obs/BankDetails/set",deletebankdetailsResObj);
//  }
//  updatebankdetails(updatebankdetailsResObj){
//    return this.http.post("http://192.168.6.186:8089/obs/BankDetails/set",updatebankdetailsResObj);
//  }
 //ends bank details
 //onboarding details stars
//   getonboardingdetails(onboardingdetailsResObj){
//   return this.http.post("http://192.168.6.186:8089/obs/employmentDetails/get",onboardingdetailsResObj);
//   }
//   saveonboardingdetails(saveonboardingdetailsResObj){
//   return this.http.post("http://192.168.6.186:8089/obs/employmentDetails/set",saveonboardingdetailsResObj);
//  }
//  deleteOnboardingdetails(deleteOnboardingdetailsResObj){
//    return this.http.post("http://192.168.6.186:8089/obs/employmentDetails/set",deleteOnboardingdetailsResObj)
//  }
//  updateonboardingdetails( updateonboardingdetailsResObj){
//    return this.http.post("http://192.168.6.186:8089/obs/employmentDetails/set",updateonboardingdetailsResObj)
//  }
 //onboarding details ends
 //project starts

// getProjectDetails(projectReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/projectDetails/get",projectReqObj);
// }
// setProjectDetails(setProjectReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/projectDetails/set",setProjectReqObj);
// }
// getprojectbyId(projectbyid){
//   return this.http.post("http://192.168.6.186:8089/obs/projectDetails/get",projectbyid);
// }
// deleteproject(projdelete){
//   return this.http.post("http://192.168.6.186:8089/obs/projectDetails/set",projdelete);
// }
// updateproject(projupdate){
//   return this.http.post("http://192.168.6.186:8089/obs/projectDetails/set",projupdate);
// } 
//project ends




 





}


