import {Model} from '../repository.model';
import {RestDataSource} from '../../dataSources/rest.datasource';
import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {MessageService} from '../../../shared/messages/message.service';
import { ConciliacionPrejudicial } from '../../entities/conciliacionPrejudicial/conciliacionPrejudicial.model';
import { Apoderado } from '../../entities/generales/apoderado.model';
import { Despacho } from '../../entities/generales/despacho.model';
import { MedioControlJudicial } from '../../entities/generales/medioControlJudicial.model';
import { Tema } from '../../entities/generales/tema.model';
import {HttpEventType} from '@angular/common/http';

@Injectable()
export class ConciliacionPrejudicialModel extends Model<ConciliacionPrejudicial> {

  constructor(private ds: RestDataSource, message: MessageService) {
    super(ds, message, environment.url + "honos/conciliacionPrejudicial/conciliacionesPrejudiciales");
  }
  
  newObject(): ConciliacionPrejudicial {
    let o: ConciliacionPrejudicial = new ConciliacionPrejudicial();
    o.apoderado = new Apoderado();
    o.convocantes = [];
    o.despacho = new Despacho();
    o.tema = new Tema();
    o.medioControlJudicial = new MedioControlJudicial();
    return o;
  }

}