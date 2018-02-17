import { ModelModule } from "../model/model.module";
import { ModalFormGenericoComponent } from "./modal-form-generico/modal-form-generico.component";
import { TablaGenericaComponent } from "./tabla-generica/tabla-generica.component";
import { SHARED_STATE, SharedState } from "../model/sharedState.model";
import { CardEstadoComponent } from './card-estado/card-estado.component';
import { MessageValidationFormComponent } from './message-validacion-form/message-validation-form.component';
import { MessageModule } from './messages/message.module';
import { ExcelService } from './tabla-generica/excel.service';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from "ngx-order-pipe";
import { NgxPaginationModule } from 'ngx-pagination';
import { Subject } from "rxjs/Subject";

@NgModule({
    imports: [
      CommonModule, 
      FormsModule, 
      ModelModule, 
      Ng2SearchPipeModule, 
      OrderModule, 
      NgxPaginationModule,
      CurrencyMaskModule
     ],
    declarations: 
    [
      TablaGenericaComponent, 
      ModalFormGenericoComponent, 
      CardEstadoComponent, 
      MessageValidationFormComponent
    ],
    exports: 
    [
      TablaGenericaComponent, 
      ModalFormGenericoComponent, 
      CardEstadoComponent, 
      MessageValidationFormComponent
    ],
    providers: [{ provide: SHARED_STATE, useValue: new Subject<SharedState>() }, ExcelService]

})
export class SharedModule { }