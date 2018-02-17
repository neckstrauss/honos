import {Model} from '../repository.model';
import {RestDataSource} from '../../dataSources/rest.datasource';
import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {MessageService} from '../../../shared/messages/message.service';
import { MedioControlJudicial } from '../../entities/generales/medioControlJudicial.model';
import {HttpEventType} from '@angular/common/http';

@Injectable()
export class MedioControlJudicialModel extends Model<MedioControlJudicial> {

  constructor(private ds: RestDataSource, message: MessageService) {
    super(ds, message, environment.url + "honos/generales/mediosControlJudicial");
  }
  
  newObject(): MedioControlJudicial {
    let o: MedioControlJudicial = new MedioControlJudicial();
    return o;
  }

}