import { Tercero } from './tercero.model';
export class Juridica extends Tercero {


  constructor(
    public razonSocial?: string,
    public nombreRepresentante?: string 
  ) {
    super();
  };


}
