import {Model} from '../repository.model';
import {RestDataSource} from '../../dataSources/rest.datasource';
import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {MessageService} from '../../../shared/messages/message.service';
import { ComiteConciliacion } from '../../entities/comiteConciliacion/comiteConciliacion.model';
import {HttpEventType} from '@angular/common/http';

@Injectable()
export class ComiteConciliacionModel extends Model<ComiteConciliacion> {

  constructor(private ds: RestDataSource, message: MessageService) {
    super(ds, message, environment.url + "honos/comiteConciliacion/comitesConciliacion");
  }
  
  newObject(): ComiteConciliacion {
    let o: ComiteConciliacion = new ComiteConciliacion();
    return o;
  }
  
  
  loadDataSetAplicables(): void {
    console.log("url plicables: " + super.getUrl()+"/aplicables" );
    super.getDataSource().setUrl(super.getUrl()+"/aplicables/1").getData().subscribe(event => {
      if (event.type === HttpEventType.Response) {
        console.log("response received... getData()", event.body);             
        super.setData( event.body.items);
      }
    });
  }
  

}