import {Model} from '../repository.model';
import {RestDataSource} from '../../dataSources/rest.datasource';
import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {MessageService} from '../../../shared/messages/message.service';
import { ConciliacionPrejudicial } from '../../entities/conciliacionPrejudicial/conciliacionPrejudicial.model';
import {HttpEventType} from '@angular/common/http';

@Injectable()
export class ConciliacionPrejudicialModel extends Model<ConciliacionPrejudicial> {

  constructor(private ds: RestDataSource, message: MessageService) {
    super(ds, message, environment.url + "honos/conciliacionPrejudicial/conciliacionesPrejudiciales");
  }
  
  newObject(): ConciliacionPrejudicial {
    let o: ConciliacionPrejudicial = new ConciliacionPrejudicial();
    return o;
  }

}