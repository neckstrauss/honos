import {Model} from '../repository.model';
import {RestDataSource} from '../../dataSources/rest.datasource';
import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import { Opcion } from '../../entities/seguridad/opcion.model';
import { HttpEventType } from '@angular/common/http';

@Injectable()
export class OpcionModel extends Model<Opcion> {
  
  newObject(): Opcion {
    return new Opcion();
  }


  constructor(private ds: RestDataSource) {
    super(ds, environment.url + "honos/seguridad/opciones");
    //super.loadDataSet();    
  }

  loadListaParaMenu(id:number = null): void {
    this.ds.setUrl(super.getUrl()+(id?"/"+id:"")).getData().subscribe(event => {
      if (event.type === HttpEventType.Response) {
        console.log("response received... getData()", event.body);
        super.setData(event.body.items); 
      }
    });
  }



}