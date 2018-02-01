import {Model} from '../repository.model';
import {RestDataSource} from '../../dataSources/rest.datasource';
import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {MessageService} from '../../../shared/messages/message.service';
import { Juridica } from '../../entities/generales/juridica.model';
import {HttpEventType} from '@angular/common/http';

@Injectable()
export class JuridicaModel extends Model<Juridica> {

  constructor(private ds: RestDataSource, message: MessageService) {
    super(ds, message, environment.url + "honos/generales/juridicas");
  }
  
  newObject(): Juridica {
    let o: Juridica = new Juridica();
    return o;
  }

}