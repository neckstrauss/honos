import {Model} from '../repository.model';
import {RestDataSource} from '../../dataSources/rest.datasource';
import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import { MessageService } from '../../../shared/messages/message.service';
import { Opcion } from '../../entities/seguridad/opcion.model';
import { HttpEventType } from '@angular/common/http';

@Injectable()
export class OpcionModel extends Model<Opcion> {
  
  newObject(): Opcion {
    return new Opcion();
  }

  constructor(private ds: RestDataSource, message: MessageService) {
    super(ds, message, environment.url + "honos/seguridad/opciones");
  }

  loadListaParaMenu(id:number = null): void {
    this.ds.setUrl(super.getUrl()+("/menu/"+id)).getData().subscribe(event => {
      if (event.type === HttpEventType.Response) {
        super.setData(event.body.items); 
      }
    });
  }
}