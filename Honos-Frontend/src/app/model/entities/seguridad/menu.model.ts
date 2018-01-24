import { Opcion } from './opcion.model';
export class Menu {

  constructor(
    public id?: number,
    public label?: string,
    public idDivInterno?: string,
    public descripcion?: string,
    public estado?: string,
    public opciones: Opcion[] =[]
  ) {};

}