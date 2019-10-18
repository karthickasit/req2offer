import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-bdm',
  templateUrl: './bdm.component.html',
  styleUrls: ['./bdm.component.scss']
})
export class BdmComponent implements OnInit {
  username: string = localStorage.getItem('username');
  role: string = localStorage.getItem('role');
  constructor(private authService: AuthService, private routerNavigate: Router) { }
  logoutAction() {
    if (this.authService.logOutAction()) {
      this.routerNavigate.navigate(['login']);
    }
  }
  ngOnInit() {
    $(document).ready(function () {
      $('.push_menu').click(function () {
        $('.wrapper').toggleClass('active');
      });
      (function () {
        'use strict';
        const treeviewMenu = $('.app-menu');
        $('[data-toggle="sidebar"]').click(function (event) {
          event.preventDefault();
          $('.app').toggleClass('sidenav-toggled');
        });
        $('[data-toggle="treeview"]').click(function (event) {
          event.preventDefault();
          if (!$(this).parent().hasClass('is-expanded')) {
            treeviewMenu.find('[data-toggle="treeview"]').parent().removeClass('is-expanded');
          }
          $(this).parent().toggleClass('is-expanded');
        });
        $('[data-toggle="treeview."].is-expanded').parent().toggleClass('is-expanded');
        $('[data-toggle="tooltip"]').tooltip();

      })();

    });
  }
}
