import { EntityGeneral } from '../entity-general.model';

export class Tercero extends EntityGeneral{

  constructor(
    public tipoDocumento?: string,
    public numeroDocumento?: number,
    public direccion?: number,
    public numeroContacto?: number,
  ) {
    super();
  };

}
