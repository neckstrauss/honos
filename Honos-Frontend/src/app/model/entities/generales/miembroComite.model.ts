import { Natural } from './natural.model';


export class MiembroComite extends Natural {


  constructor(
    public tipo?: string,
    public cargo?: string
  ) {
    super();
  };
 


}
