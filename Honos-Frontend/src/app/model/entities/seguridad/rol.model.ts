import { Menu } from './menu.model';
export class Rol {

  constructor(
    public id?: number,
    public nombre?: string,
    public descripcion?: string,
    public estado?: string,
    public menus?: Menu[]
  ) {};

}