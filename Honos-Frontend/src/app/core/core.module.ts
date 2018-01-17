import { NavbarComponent } from "./barras-navegacion/navbar/navbar.component";
import {NgModule} from "@angular/core";

import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule } from '@angular/router';
@NgModule({
  imports: [BrowserModule, RouterModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],

})
export class CoreModule {}