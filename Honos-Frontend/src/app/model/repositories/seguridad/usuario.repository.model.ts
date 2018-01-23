import {Model} from '../repository.model';
import {RestDataSource} from '../../dataSources/rest.datasource';
import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import { Rol } from '../../entities/seguridad/rol.model';
import { Usuario } from '../../entities/seguridad/usuario.model';

@Injectable()
export class UsuarioModel extends Model<Usuario> {
  

  constructor(private ds: RestDataSource) {
    super(ds, environment.url + "honos/seguridad/usuarios");
    super.loadDataSet();    
  }
  
  newObject(): Usuario {
    
    let u: Usuario = new Usuario();
    
    u.rol = new Rol();
    
    return u;
  }

}