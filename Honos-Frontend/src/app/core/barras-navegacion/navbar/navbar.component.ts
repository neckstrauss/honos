import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
//import { AuthService } from "app/core/auth/auth.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(/*public router: Router, private auth: AuthService*/) {
//    this.router.events.subscribe((val) => {
//      if (val instanceof NavigationEnd && window.innerWidth <= 992) {
//        this.toggleSidebar();
//      }
//    });
  }

  ngOnInit() {
    this.onResize()
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    if (dom) {
      dom.classList.toggle('push-right');
//      const main: any = document.querySelector('.main-container');
//      if (window.innerWidth >= 992) {
//        main.classList.toggle('main-right');
//      }
    }
  }

  onResize() {
    const dom: any = document.querySelector('body');
    const main: any = document.querySelector('.main-container');
    if (dom.classList.contains('push-right')) {
      dom.classList.remove('push-right');
//      main.classList.remove('main-right');
    }
  }

  onLoggedout() {
    //this.auth.closeSession();
    // this.router.navigate(['/home']);

  }

  consola() {
  }
}
