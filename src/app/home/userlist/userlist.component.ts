import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder, Form } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  state = null;
  public ResulatantUser: any;
  users: any;
  employee_id: number;
  employee_name: string;
  contact_number: number;
  email_id: string;
  role_nm: string;
  form: FormGroup;
  firstName = new FormControl('', Validators.required);
  reporting_manager: any;
  role_id: any = null;
  role_name: string;
  role: any;
  rol: '';
  sai: any;
  emp_name: any;
  emp_id: any;
  edit_employee_id: any;
  edit_employee_name: any;
  edit_contact_number: any;
  edit_email_id: any;
  edit_role_nm: any;
  edit_reporting_manager: any;
  edit_role_id: any;
  reportingManager: any;
  reportingManagerList: any;
  updateReportingManager: any;
  mob_num  = "^((\\+91-?)|0)?[0-9]{10}$";


 constructor(private http: HttpClient, private fb: FormBuilder, private as: ApiservicesService, private spinner: NgxSpinnerService,
   private routerNavigate: Router, private toaster: ToastrService) {
this.as.get_roles().subscribe(res => {
      console.log(res);
    this.rol = res['roles'];
    console.log(this.rol)
  });
  this.form = fb.group({
    'firstName': this.firstName,
});
  }
ngOnInit() {
  this.spinner.show();
  this.getUserslist();
  this.getReportingManagerList();
  }
  getUserslist() {
    this.as.get_userlist().subscribe(res => {
      console.log(res);
      this.ResulatantUser = res['response'];
      this.spinner.hide();
    });
  }
  clear() {
  }

  getReportingManagerList(){
    this.as.get_reporting_manager().subscribe(res => {
      this.reportingManagerList = res['ManagersList'];
      console.log(this.reportingManagerList);
    })
  }
  getSelectedValueId(args){
    this.reportingManager = args.target.value;  
    console.log(this.reportingManager);
  }
  UpdateSelectedValueId(args){
    this.updateReportingManager = args.target.value;  
    console.log(this.updateReportingManager);
  }

  edit(obj) {
    console.log(obj);
    const emp_id = obj['employee_id'];
    console.log(this.emp_id)
    this.as.get_user_id(emp_id).subscribe(res => {
      const result = res['result'][0];
      this.edit_employee_id = result['employee_id'];
      this.edit_employee_name = result['employee_name'];
      this.edit_contact_number = result['contact_number'];
      this.edit_email_id = result['email_id'];
      this.edit_role_nm = result['role_nm'];
      this.edit_reporting_manager = result['reporting_manager'];
      this.edit_role_id = result['role_id'].toString();
    });
  }
  deleterecord(i) {
    this.emp_name =  i['employee_name'];
    this.emp_id  = i['employee_id'];
    console.log(this.emp_id);
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
        this.as.delete_user(i['employee_id']).subscribe(res => {
        console.log(res);
        this.getUserslist();
        this.routerNavigate.navigate(['/admin/userlist']);
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



  update(data) {
    // var resObj = {};
    // resObj['employee_id'] = this.edit_employee_id;
    // resObj['employee_name'] = this.edit_employee_name;
    // resObj['email_id'] = this.edit_email_id;
    // resObj['role_id'] = this.edit_role_id;
    // resObj['reporting_manager'] = this.edit_reporting_manager.toString();
    // resObj['contact_number'] = this.edit_contact_number;
    // resObj['role_nm'] = this.edit_role_id;
    // console.log(resObj)
    // data.value['employee_id'] = data.value['employee_id'].toString();
    data.value['reporting_manager'] = data.value['reporting_manager'].toString();
console.log(data.value)
   this.as.put_adduser(data.value).subscribe(res => {
     console.log(res);
     const message = res['message'];
     if (message === 'Success') {
      Swal.fire(
        'updated!',
        'User updated Successfully.',
        'success'
      );
      this.getUserslist();

    }
    if (message === 'Failure') {
      Swal.fire(
        'Failed!',
        res['errors'],
        'warning'
      );
    }
  
     //this.routerNavigate.navigate(['/admin/userlist']);
   });
}

 adduser(add) {
console.log(add.value);
this.spinner.show();
  this.as.post_adduser(add.value).subscribe(res => {
    console.log(res);
    this.spinner.hide();
    const message = res['message'];
    if (message === 'Success') {
      Swal.fire(
        'Added!',
        'User Created Successfully.',
        'success'
      );
      this.getUserslist();
    }
    if (message === 'Failure') {
      Swal.fire(
        'Failed!',
        res['errors'],
        'warning'
      );
    }
    add.resetForm();
  this.routerNavigate.navigate(['/admin/userlist']);
});
          }
}

