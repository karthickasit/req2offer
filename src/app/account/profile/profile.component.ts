import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user_id: any = localStorage.getItem('employee_id');
  name: string ;
  email: any;
  role: any;
  manger: any;
  contact: any;
  role_id: any;
  manager_id: any;
  id: any;
  details: any;

  constructor(private as: ApiservicesService) {
  }

  userinfo() {
    this.as.get_profile_byid(this.user_id).subscribe(res => {
      const userdetails = res['ProfileDetails'][0];
      this.details = res['ProfileDetails']
      this.email = userdetails['email_id'];
      this.id = userdetails['employee_id'];
      this.name = userdetails['employee_name'];
      this.role = userdetails['role_name'];
      this.manger = userdetails['reporting_manager_name'];
      this.contact = userdetails['contact_number'];
      this.manager_id = userdetails['reporting_manager'];
      this.role_id = userdetails['role_id'].toString();
     });

  }

  ngOnInit() {
    this.userinfo();
  }


  update(data) {
    console.log(data.value);
    data.value['role_id'] = this.role_id;
    data.value['reporting_manager'] = this.manager_id.toString();
    data.value['employee_id'] = this.id,
    this.as.put_adduser(data.value).subscribe(res => {
      console.log(res);
      const message = res['message'];
      if ( message === 'Success') {
        Swal.fire(
          'Profile Updated Successfully',
           res['response'],
          'success'
        );
      }
    });
  }


}
