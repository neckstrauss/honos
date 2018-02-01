import { EntityGeneral } from '../entity-general.model';
import { Menu } from './menu.model';
export class Rol extends EntityGeneral{

  constructor(
    public nombre?: string,
    public descripcion?: string,
    public menus?: Menu[]
  ) { super();};

}