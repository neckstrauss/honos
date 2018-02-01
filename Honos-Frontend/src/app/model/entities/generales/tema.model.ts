import { EntityGeneral } from '../entity-general.model';

export class Tema extends EntityGeneral{

  constructor(
    public nombre?: string,
  ) { super();};

}