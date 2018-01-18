import { ModelModule } from '../model/model.module';
import { NavbarComponent } from "./barras-navegacion/navbar/navbar.component";
import { SidebarComponent } from './barras-navegacion/sidebar/sidebar.component';
import {NgModule} from "@angular/core";

import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule } from '@angular/router';
@NgModule({
  imports: [BrowserModule, RouterModule, ModelModule],
  declarations: [NavbarComponent, SidebarComponent],
  exports: [NavbarComponent, SidebarComponent],

})
export class CoreModule {}