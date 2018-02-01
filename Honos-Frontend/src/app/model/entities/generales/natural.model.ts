import { Tercero } from './tercero.model';
export class Natural extends Tercero {


  constructor(
    public primerNombre?: string,
    public segundoNombre?: string,
    public primerApellido?: string,
    public segundoApellido?: string
  ) {
    super();
  };


}
