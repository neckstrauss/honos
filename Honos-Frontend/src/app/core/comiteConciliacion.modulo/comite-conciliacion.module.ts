import {ModelModule} from "../../model/model.module";
import { ComiteConciliacionModel } from '../../model/repositories/comiteConciliacion/comiteConciliacion.repository.model';
import {SHARED_STATE, SharedState} from "../../model/sharedState.model";
import {SharedModule} from '../../shared/shared.module';
import { ComiteConciliacionFormComponent } from './comite/comiteConciliacion.form.component';
import { ComiteConciliacionTableComponent } from './comite/comiteConciliacion.table.component';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";
import {Subject} from "rxjs/Subject";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from 'ng2-ckeditor';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';


let routing = RouterModule.forChild([
  
  {path: "gestion", component: ComiteConciliacionTableComponent, resolve: {model: ComiteConciliacionModel}},

  {path: "", redirectTo: "/comite/gestion", pathMatch: "full"},

]);

@NgModule({
  imports: [CommonModule, 
            FormsModule, 
            ReactiveFormsModule, 
            ModelModule, 
            routing, 
            SharedModule, 
            NgxMyDatePickerModule.forRoot(), 
            CurrencyMaskModule,
            CKEditorModule,
            NgbModule
          ],
  declarations: [
      ComiteConciliacionTableComponent, ComiteConciliacionFormComponent
      
  ],
  exports: [
      ComiteConciliacionTableComponent
  ],
  providers: [{provide: SHARED_STATE, useValue: new Subject<SharedState>()}]

})
export class ComiteConciliacionModule {}

