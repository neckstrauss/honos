import { EntityGeneral } from '../entity-general.model';
export class Despacho extends EntityGeneral{

  constructor(
    public nombre?: string,
    public tipo?: string,    
  ) {super();};

}