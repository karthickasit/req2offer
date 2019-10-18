import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budashboard',
  templateUrl: './budashboard.component.html',
  styleUrls: ['./budashboard.component.scss']
})
export class BudashboardComponent implements OnInit {
  username: string = localStorage.getItem('username');
  constructor() { }

  ngOnInit() {
  }

}
