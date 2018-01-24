import { MenuModel } from '../../../model/repositories/menu.repository.model';
import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isOpen = false;
  isActive = false;
  showMenu = '';

  constructor(private menuModel: MenuModel
  ) {
    this.menuModel.loadMenuUsuario();
  }

  ngOnInit() {
  }

  eventCalled() {
    this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  collapsar(id: string) {
    if ($('#' + id + '').hasClass('isOpen')) {
      $('#' + id + '').removeClass('isOpen');
    }
    else {
      $('#' + id + '').addClass('isOpen');
    }
    $('a[data-toggle="collapse"]').css('pointer-events', 'none');
    setTimeout(function () {
      $('a[data-toggle="collapse"]').css('pointer-events', 'all');
    },
      400
    )
  }

  onLoggedout() {
   // this.auth.closeSession();
  }



}
