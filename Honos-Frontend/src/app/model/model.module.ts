import { SharedState, SHARED_STATE } from './sharedState.model';
import {NgModule} from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import {Model} from "./repositories/repository.model";
import { RestDataSource } from "./dataSources/rest.datasource";
import { ConciliacionPrejudicialModel } from './repositories/conciliacionPrejudicial/conciliacionPrejudicial.repository.model';
import { ApoderadoModel } from './repositories/generales/apoderado.repository.model';
import { DespachoModel } from './repositories/generales/despacho.repository.model';
import { JuridicaModel } from './repositories/generales/juridica.repository.model';
import { MedioControlJudicialModel } from './repositories/generales/medioControlJudicial.repository.model';
import { NaturalModel } from './repositories/generales/natural.repository.model';
import { TemaModel } from './repositories/generales/tema.repository.model';
import { TerceroModel } from './repositories/generales/tercero.repository.model';
import { MenuModel } from './repositories/seguridad/menu.repository.model';
import { OpcionModel } from './repositories/seguridad/opcion.repository.model';
import { RolModel } from './repositories/seguridad/rol.repository.model';
import { UsuarioModel } from './repositories/seguridad/usuario.repository.model';
import { Subject } from 'rxjs/Subject';


@NgModule({
  imports: [HttpClientModule],
  providers: [  
                OpcionModel,
                MenuModel,
                RolModel,
                UsuarioModel,
                ConciliacionPrejudicialModel,
                ApoderadoModel,
                DespachoModel,
                JuridicaModel,
                MedioControlJudicialModel,
                NaturalModel,
                TemaModel,
                TerceroModel,
                RestDataSource, 
                { 
                  provide: SHARED_STATE, 
                  useValue: new Subject<SharedState>() 
                }
              ]
})
export class ModelModule {}