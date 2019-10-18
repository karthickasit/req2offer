import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }
  username:string=localStorage.getItem("username")
  ngOnInit() {
    this.spinner.show();
 
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

}
