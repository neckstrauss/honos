import { EntityGeneral } from '../entity-general.model';
import { Opcion } from './opcion.model';
export class Menu extends EntityGeneral{

  constructor(
    public label?: string,
    public idDivInterno?: string,
    public descripcion?: string,
    public opciones: Opcion[] =[]
  ) {
    super();
  };

}