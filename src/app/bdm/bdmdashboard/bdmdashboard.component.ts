import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bdmdashboard',
  templateUrl: './bdmdashboard.component.html',
  styleUrls: ['./bdmdashboard.component.scss']
})
export class BdmdashboardComponent implements OnInit {
username: string = localStorage.getItem('username');
  constructor() { }

  ngOnInit() {
  }

}
