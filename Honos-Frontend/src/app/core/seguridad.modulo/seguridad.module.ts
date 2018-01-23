import {ModelModule} from "../../model/model.module";
import {MenuModel} from '../../model/repositories/seguridad/menu.repository.model';
import {OpcionModel} from '../../model/repositories/seguridad/opcion.repository.model';
import {SHARED_STATE, SharedState} from "../../model/sharedState.model";
import {SharedModule} from '../../shared/shared.module';
import {MenuFormComponent} from './menu/menu.form.component';
import {MenuTableComponent} from './menu/menu.table.component';
import {OpcionFormComponent} from './opcion/opcion.form.component';
import {OpcionTableComponent} from './opcion/opcion.table.component';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";
import {Subject} from "rxjs/Subject";


let routing = RouterModule.forChild([

  {path: "opcion", component: OpcionTableComponent, resolve: {model: OpcionModel}},
  {path: "menu", component: MenuTableComponent, resolve: {model: MenuModel}},
  {path: "", redirectTo: "/seguridad/usuario", pathMatch: "full"},

]);

@NgModule({
  imports: [CommonModule, FormsModule, ModelModule, routing, SharedModule],
  declarations: [
    OpcionTableComponent, OpcionFormComponent,
    MenuTableComponent, MenuFormComponent
  ],
  exports: [
    OpcionTableComponent,
    MenuTableComponent
  ],
  providers: [{provide: SHARED_STATE, useValue: new Subject<SharedState>()}]

})
export class SeguridadModule {}

