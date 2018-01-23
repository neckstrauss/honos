import {ModelModule} from "../../model/model.module";
import {MenuModel} from '../../model/repositories/seguridad/menu.repository.model';
import {OpcionModel} from '../../model/repositories/seguridad/opcion.repository.model';
import { RolModel } from '../../model/repositories/seguridad/rol.repository.model';
import { UsuarioModel } from '../../model/repositories/seguridad/usuario.repository.model';
import {SHARED_STATE, SharedState} from "../../model/sharedState.model";
import {SharedModule} from '../../shared/shared.module';
import {MenuFormComponent} from './menu/menu.form.component';
import {MenuTableComponent} from './menu/menu.table.component';
import {OpcionFormComponent} from './opcion/opcion.form.component';
import {OpcionTableComponent} from './opcion/opcion.table.component';
import { RolFormComponent } from './rol/rol.form.component';
import { RolTableComponent } from './rol/rol.table.component';
import { UsuarioFormComponent } from './usuario/usuario.form.component';
import { UsuarioTableComponent } from './usuario/usuario.table.component';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";
import {Subject} from "rxjs/Subject";


let routing = RouterModule.forChild([

  {path: "opcion", component: OpcionTableComponent, resolve: {model: OpcionModel}},
  {path: "menu", component: MenuTableComponent, resolve: {model: MenuModel}},
  {path: "rol", component: RolTableComponent, resolve: {model: RolModel}},
  {path: "usuario", component: UsuarioTableComponent, resolve: {model: UsuarioModel}},
  {path: "", redirectTo: "/seguridad/usuario", pathMatch: "full"},

]);

@NgModule({
  imports: [CommonModule, FormsModule, ModelModule, routing, SharedModule],
  declarations: [
    OpcionTableComponent, OpcionFormComponent,
    MenuTableComponent, MenuFormComponent,
    RolTableComponent, RolFormComponent,
    UsuarioTableComponent, UsuarioFormComponent
  ],
  exports: [
    OpcionTableComponent,
    MenuTableComponent,
    RolTableComponent,
    UsuarioTableComponent
  ],
  providers: [{provide: SHARED_STATE, useValue: new Subject<SharedState>()}]

})
export class SeguridadModule {}

