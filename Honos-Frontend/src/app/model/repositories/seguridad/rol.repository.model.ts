import {Model} from '../repository.model';
import {RestDataSource} from '../../dataSources/rest.datasource';
import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import { MessageService } from '../../../shared/messages/message.service';
import { Rol } from '../../entities/seguridad/rol.model';

@Injectable()
export class RolModel extends Model<Rol> {
  


  constructor(private ds: RestDataSource, message: MessageService) {
    super(ds, message, environment.url + "honos/seguridad/roles");    
  }
  
  newObject(): Rol {
    return new Rol();
  }



}