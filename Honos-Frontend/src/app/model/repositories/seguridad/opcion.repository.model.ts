import {Model} from '../repository.model';
import {RestDataSource} from '../../dataSources/rest.datasource';
import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import { Opcion } from '../../entities/seguridad/opcion.model';

@Injectable()
export class OpcionModel extends Model<Opcion> {


  constructor(private ds: RestDataSource) {
    super(ds, environment.url + "honos/seguridad/opciones");
    super.loadDataSet();    
  }





}