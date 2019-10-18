import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
declare var $: any;

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {
  username: string;
  role: string;

  constructor(private authService: AuthService, private routerNavigate: Router) { }

  logoutAction() {
    if (this.authService.logOutAction()) {
      this.routerNavigate.navigate(['login'])
    }
  }


  ngOnInit() {
this.username=localStorage.getItem('username');
this.role = localStorage.getItem('role');
    $(document).ready(function () {
      $(".push_menu").click(function () {
        $(".wrapper").toggleClass("active");
      });


      (function () {
        "use strict";

        var treeviewMenu = $('.app-menu');

        // Toggle Sidebar
        $('[data-toggle="sidebar"]').click(function (event) {
          event.preventDefault();
          $('.app').toggleClass('sidenav-toggled');
        });

        // Activate sidebar treeview toggle
        $("[data-toggle='treeview']").click(function (event) {
          event.preventDefault();
          if (!$(this).parent().hasClass('is-expanded')) {
            treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded');
          }
          $(this).parent().toggleClass('is-expanded');
        });

        // Set initial active toggle
        $("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');

        //Activate bootstrip tooltips
        $("[data-toggle='tooltip']").tooltip();

      })();

    });
  }

}
