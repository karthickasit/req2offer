import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customerlist: any;
  routerNavigate: any;
  customer_id: any;
  customer_name: any;
  email_id: any;
  location: any;
  spoc: any;
  address: any;
  contact_number: any;
  type: string;
  constructor(private http: HttpClient, private router: Router, private as: ApiservicesService) {

  }
  ngOnInit() {
    this.getCustomerList();
  }

  getCustomerList() {
    this.as.get_customerlist().subscribe(res => {
      this.customerlist = res['response'];
      console.log(this.customerlist);
    });
  }


  deleterecord(i) {
    // var c_id = i['customer_id']

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
        this.as.delete_customer(i).subscribe(res => {
        console.log(res);
        this.getCustomerList();
        this.router.navigate(['/admin/customerlist']);
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


  edit(custemer) {
    // console.log(custemer);
    const cus_id = custemer['customer_id'];
    this.as.get_customerbyid(cus_id).subscribe(res => {
      // console.log("response");
      console.log(res);
      const response = res['customer details'][0];
      // console.log(response)
      this.customer_id = response['customer_id'];
      this.customer_name = response['customer_name'];
      this.email_id = response['email_id'];
      this.location = response['location'];
      this.spoc = response['spoc'];
      this.address = response['address'];
      this.contact_number = response['contact_number'];

    });

  }


  update(customr) {
    console.log(customr);
    this.as.put_cutomer(customr.value).subscribe(res => {
      console.log(res);
      if (res['status_code'] === 200) {
        Swal.fire(
          'Updated!',
          'Customer Details Updated Successfully',
          'success'
        );
        this.getCustomerList();
      }
      if (res['status_code'] === 204) {
        Swal.fire(
          'Failed!',
          res['error'],
          'warning'
        );
      this.router.navigate(['/admin/customerlist']);
        }
    });
  }

  submit(data) {
    console.log(data.value);
    this.as.post_customer(data.value).subscribe(res => {
      console.log(res);
      if (res['status_code'] === 200) {
        Swal.fire(
          'Added!',
          'New Customer Added Successfully',
          'success'
        );
        this.getCustomerList();
      }
      if (res['status_code'] === 204) {
        Swal.fire(
          'Failed!',
          res['error'],
          'warning'
        );
      }
    data.resetForm();
    });
  }


  clear() {
  }
}
