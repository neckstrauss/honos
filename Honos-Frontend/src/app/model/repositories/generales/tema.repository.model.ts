import {Model} from '../repository.model';
import {RestDataSource} from '../../dataSources/rest.datasource';
import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {MessageService} from '../../../shared/messages/message.service';
import { Tema } from '../../entities/generales/tema.model';
import {HttpEventType} from '@angular/common/http';

@Injectable()
export class TemaModel extends Model<Tema> {

  constructor(private ds: RestDataSource, message: MessageService) {
    super(ds, message, environment.url + "honos/generales/temas");
  }
  
  newObject(): Tema {
    let o: Tema = new Tema();
    return o;
  }

}