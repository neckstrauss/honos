import { Rol } from './rol.model';

export class Usuario {

  constructor(
    public id: number,
    public usuario: string,
    public password: string,
    public estado: string,
    public rol: Rol
  ) {};

}