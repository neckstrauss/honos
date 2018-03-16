
import { environment } from '../../../../../environments/environment';
import { MessageService } from '../../../../shared/messages/message.service';
import { RestDataSource } from '../../../dataSources/rest.datasource';
import { FichaConciliacion } from '../../../entities/comiteConciliacion/fichaTecnica/fichaConciliacion.model';
import { Model } from '../../repository.model';
import {HttpEventType} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FichaConciliacionModel extends Model<FichaConciliacion> {
  
  constructor(private ds: RestDataSource, message: MessageService) {
    super(ds, message, environment.url + "honos/comiteConciliacion/fichasConciliacion");
  }
  
  newObject(): FichaConciliacion {
    let o: FichaConciliacion = new FichaConciliacion();
    return o;
  }

}