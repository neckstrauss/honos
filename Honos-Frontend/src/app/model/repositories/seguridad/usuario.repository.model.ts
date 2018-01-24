import {Model} from '../repository.model';
import {RestDataSource} from '../../dataSources/rest.datasource';
import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {Rol} from '../../entities/seguridad/rol.model';
import {Usuario} from '../../entities/seguridad/usuario.model';
import { HttpEventType } from '@angular/common/http';

@Injectable()
export class UsuarioModel extends Model<Usuario> {

  private usuario: Usuario = new Usuario();

  constructor(private ds: RestDataSource) {
    super(ds, environment.url + "honos/seguridad/usuarios");
  }

  newObject(): Usuario {
    let u: Usuario = new Usuario();
    u.rol = new Rol();
    return u;
  }

  getUsuario() {
    return this.usuario;
  }
  
  login(): boolean
  {
    this.usuario.usuario = 'admin';
    
    this.ds.setUrl(super.getUrl()+"/usuario").getDataWithParameter(this.usuario).subscribe(event => {
      if (event.type === HttpEventType.Response) {
        this.usuario= event.body; 
      }
    }
    );  
    
    return true;
  }


}