import {Product} from '../../entities/product.model';
import {Model} from '../repository.model';
import {RestDataSource} from '../../dataSources/rest.datasource';
import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import { Usuario } from '../../entities/seguridad/usuario.model';

@Injectable()
export class UsuarioModel extends Model<Usuario> {

  constructor(private ds: RestDataSource) {
    super(ds, environment.url + "honos/seguridad/usuarios");
    super.loadDataSet();    
  }

}