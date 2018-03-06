import {Model} from '../repository.model';
import {RestDataSource} from '../../dataSources/rest.datasource';
import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {MessageService} from '../../../shared/messages/message.service';
import { Despacho } from '../../entities/generales/despacho.model';
import {HttpEventType} from '@angular/common/http';

@Injectable()
export class DespachoModel extends Model<Despacho> {

  constructor(private ds: RestDataSource, message: MessageService) {
    super(ds, message, environment.url + "honos/generales/despachos");
  }
  
  newObject(): Despacho {
    let o: Despacho = new Despacho();
    return o;
  }

}