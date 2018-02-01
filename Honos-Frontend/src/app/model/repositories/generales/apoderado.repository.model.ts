import {Model} from '../repository.model';
import {RestDataSource} from '../../dataSources/rest.datasource';
import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {MessageService} from '../../../shared/messages/message.service';
import { Apoderado } from '../../entities/generales/apoderado.model';
import {HttpEventType} from '@angular/common/http';

@Injectable()
export class ApoderadoModel extends Model<Apoderado> {

  constructor(private ds: RestDataSource, message: MessageService) {
    super(ds, message, environment.url + "honos/generales/apoderados");
  }
  
  newObject(): Apoderado {
    let o: Apoderado = new Apoderado();
    return o;
  }

}