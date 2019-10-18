import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../src/app/services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
username:string=localStorage.getItem("username")
  constructor(private authService:AuthService, private spinner: NgxSpinnerService) { }
  ngOnInit() {
    
  }

}
