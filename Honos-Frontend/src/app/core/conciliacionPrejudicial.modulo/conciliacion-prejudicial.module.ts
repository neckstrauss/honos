import {ModelModule} from "../../model/model.module";
import {MenuModel} from '../../model/repositories/seguridad/menu.repository.model';
import {OpcionModel} from '../../model/repositories/seguridad/opcion.repository.model';
import { RolModel } from '../../model/repositories/seguridad/rol.repository.model';
import { UsuarioModel } from '../../model/repositories/seguridad/usuario.repository.model';
import {SHARED_STATE, SharedState} from "../../model/sharedState.model";
import {SharedModule} from '../../shared/shared.module';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";
import {Subject} from "rxjs/Subject";


let routing = RouterModule.forChild([
  //{path: "usuario", component: UsuarioTableComponent, resolve: {model: UsuarioModel}},
  {path: "", redirectTo: "/conciliacion/table", pathMatch: "full"},

]);

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ModelModule, routing, SharedModule],
  declarations: [
  
  ],
  exports: [
  
  ],
  providers: [{provide: SHARED_STATE, useValue: new Subject<SharedState>()}]

})
export class ConciliacionPrejudicialModule {}

