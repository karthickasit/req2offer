import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from 'src/app/services/apiservices.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user_id: string;
  name: any;
  email: any;
  role: any;
  manger: any;
  contact: any;
  manager_id: any;
  role_id: string;
  id: any;
  details: any;

  constructor(private as: ApiservicesService) {
    
  }

  update(data) {
    data.value['role_id'] = this.role_id;
    data.value['reporting_manager'] = this.manager_id.toString();
    data.value['employee_id'] = this.id,
    console.log(data.value);
    this.as.put_adduser(data.value).subscribe(res => { console.log(res)
    const message = res['message'];
      if ( message === 'Success') {
        Swal.fire(
          'Profile Updated Successfully',
           res['response'],
          'success'
        );

      }
      if ( message === 'Failure') {
        Swal.fire(
          'Profile not updated',
           res['response'],
          'warning'
        );

      }
      this.profiledetails()
    });
  }
  

  ngOnInit() {
  this.profiledetails()
  }


  profiledetails() {
    this.user_id = localStorage.getItem('employee_id');
    this.as.get_profile_byid(this.user_id).subscribe(res => {console.log(res['ProfileDetails']);
    const info = res['ProfileDetails'][0];
    this.details = res['ProfileDetails']
    this.id = info['employee_id'],
    this.name = info['employee_name'],
    this.email = info['email_id'],
    this.role = info['role_name'],
    this.manger = info['reporting_manager_name'],
    this.contact = info['contact_number'],
    this.manager_id = info['reporting_manager'],
    this.role_id = info['role_id'].toString(),
    console.log(this.name);
  });

  }

}
