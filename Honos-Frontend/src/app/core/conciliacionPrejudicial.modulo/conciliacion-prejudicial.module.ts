import {ModelModule} from "../../model/model.module";
import { ConciliacionPrejudicialModel } from '../../model/repositories/conciliacionPrejudicial/conciliacionPrejudicial.repository.model';
import {MenuModel} from '../../model/repositories/seguridad/menu.repository.model';
import {OpcionModel} from '../../model/repositories/seguridad/opcion.repository.model';
import { RolModel } from '../../model/repositories/seguridad/rol.repository.model';
import { UsuarioModel } from '../../model/repositories/seguridad/usuario.repository.model';
import {SHARED_STATE, SharedState} from "../../model/sharedState.model";
import {SharedModule} from '../../shared/shared.module';
import { RadicacionConciliacionPrejudicialFormComponent } from './radicacion/radicacionConciliacion.form.component';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";
import {Subject} from "rxjs/Subject";
import { RadicacionConciliacionPrejudicialTableComponent } from './radicacion/radicacionConciliacion.table.component';
import { MyDatePickerModule } from 'mydatepicker';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';


let routing = RouterModule.forChild([
  {path: "radicacion", component: RadicacionConciliacionPrejudicialTableComponent, resolve: {model: ConciliacionPrejudicialModel}},

  {path: "", redirectTo: "/conciliacion/radicacion", pathMatch: "full"},

]);

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ModelModule, routing, SharedModule, MyDatePickerModule, NgxMyDatePickerModule.forRoot()],
  declarations: [
      RadicacionConciliacionPrejudicialTableComponent, RadicacionConciliacionPrejudicialFormComponent
  ],
  exports: [
      RadicacionConciliacionPrejudicialTableComponent
  ],
  providers: [{provide: SHARED_STATE, useValue: new Subject<SharedState>()}]

})
export class ConciliacionPrejudicialModule {}

