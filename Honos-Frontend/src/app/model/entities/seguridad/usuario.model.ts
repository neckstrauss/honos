import { EntityGeneral } from '../entity-general.model';
import { Rol } from './rol.model';

export class Usuario extends EntityGeneral{

  constructor(
    public usuario?: string,
    public password?: string,
    public rol: Rol = new Rol()
  ) { super();};

}