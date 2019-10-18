import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ApiservicesService } from '../services/apiservices.service';

declare var $: any;

@Component({
  selector: 'app-staffing',
  templateUrl: './staffing.component.html',
  styleUrls: ['./staffing.component.scss']
})

export class StaffingComponent implements OnInit {
  id:any;

  username:string=localStorage.getItem("username");
  role:string=localStorage.getItem("role");
  constructor(private authService: AuthService, private routerNavigate: Router, private as:ApiservicesService) {
   }

  logoutAction() {
    if (this.authService.logOutAction()) {
      this.routerNavigate.navigate(['login'])
    }
  }
  showProfile(){
    this.id = localStorage.getItem("employee_id")
    this.as.get_profile_byid(this.id)
  }

  ngOnInit() {
  $(document).ready(function () {
       $(".push_menu").click(function () {
         $(".wrapper").toggleClass("active");
      });

      (function () {
        "use strict";
        var treeviewMenu = $('.app-menu');
       
        $('[data-toggle="sidebar"]').click(function (event) {
          event.preventDefault();
          $('.app').toggleClass('sidenav-toggled');
        });
    
        $("[data-toggle='treeview']").click(function (event) {
          event.preventDefault();
          if (!$(this).parent().hasClass('is-expanded')) {
            treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded');
          }
          $(this).parent().toggleClass('is-expanded');
        });
        
        $("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');
     
        $("[data-toggle='tooltip']").tooltip();
      })();
    }
    );
   }
  
}
