import {Model} from '../repository.model';
import {RestDataSource} from '../../dataSources/rest.datasource';
import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {MessageService} from '../../../shared/messages/message.service';
import { Tercero } from '../../entities/generales/tercero.model';
import {HttpEventType} from '@angular/common/http';

@Injectable()
export class TerceroModel extends Model<Tercero> {

  constructor(private ds: RestDataSource, message: MessageService) {
    super(ds, message, environment.url + "honos/generales/terceros");
  }
  
  newObject(): Tercero {
    let o: Tercero = new Tercero();
    return o;
  }

}