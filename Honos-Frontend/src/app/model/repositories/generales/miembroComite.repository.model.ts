import {Model} from '../repository.model';
import {RestDataSource} from '../../dataSources/rest.datasource';
import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {MessageService} from '../../../shared/messages/message.service';
import { MiembroComite } from '../../entities/generales/miembroComite.model';
import {HttpEventType} from '@angular/common/http';

@Injectable()
export class MiembroComiteModel extends Model<MiembroComite> {

  constructor(private ds: RestDataSource, message: MessageService) {
    super(ds, message, environment.url + "honos/generales/miembrosComiteConciliacion");
  }
  
  newObject(): MiembroComite {
    let o: MiembroComite = new MiembroComite();
    return o;
  }

}