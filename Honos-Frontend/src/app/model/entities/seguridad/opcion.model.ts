import { EntityGeneral } from '../entity-general.model';
export class Opcion extends EntityGeneral{

  constructor(
    public label?: string,
    public uri?: string,
  ) {
    super();
  };

}