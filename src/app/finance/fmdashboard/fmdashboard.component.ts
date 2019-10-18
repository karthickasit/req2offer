import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-fmdashboard',
  templateUrl: './fmdashboard.component.html',
  styleUrls: ['./fmdashboard.component.scss']
})
export class FmdashboardComponent implements OnInit {
  username: string = localStorage.getItem('username');

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
  
  }

}
