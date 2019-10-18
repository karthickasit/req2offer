import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

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

  clear() {}


  deleterecord(data) {
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
        this.as.delete_customer(data).subscribe(res => {
        console.log(res);
        this.getCustomerList();
        this.router.navigate(['/bdm/customers']);
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


  edit(data) {
    const cus_id = data['customer_id'];
    this.as.get_customerbyid(cus_id).subscribe(res => {
      console.log(res);
      const response = res['customer details'][0];
      this.customer_id = response['customer_id'];
      this.customer_name = response['customer_name'];
      this.email_id = response['email_id'];
      this.location = response['location'];
      this.spoc = response['spoc'];
      this.address = response['address'];
      this.contact_number = response['contact_number'];
    });
  }

  update_cust(data) {
    console.log(data);
    this.as.put_cutomer(data.value).subscribe(res => {
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
        this.getCustomerList();
        }
    });
  }

  add_cust(data1) {
    console.log(data1.value);
    this.as.post_customer(data1.value).subscribe(res => {
      console.log(res);
      if (res['status_code'] === 200) {
        Swal.fire(
          'Added!',
          'New Customer Added Successfully',
          'success'
        );
        data1.resetForm();
        this.getCustomerList();
      }
      if (res['status_code'] === 204) {
        Swal.fire(
          'Failed!',
          res['error'],
          'warning'
        );
      }
      data1.resetForm();
    });
  }
}
