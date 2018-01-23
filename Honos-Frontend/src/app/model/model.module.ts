import { SharedState, SHARED_STATE } from './sharedState.model';
import {NgModule} from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import {Model} from "./repositories/repository.model";
import { RestDataSource } from "./dataSources/rest.datasource";
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
                RestDataSource, 
                { 
                  provide: SHARED_STATE, 
                  useValue: new Subject<SharedState>() 
                }
              ]
})
export class ModelModule {}