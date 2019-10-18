import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stdashboard',
  templateUrl: './stdashboard.component.html',
  styleUrls: ['./stdashboard.component.scss']
})
export class StdashboardComponent implements OnInit {
  username: string = localStorage.getItem('username');
  constructor() { }

  ngOnInit() {
  }

}
