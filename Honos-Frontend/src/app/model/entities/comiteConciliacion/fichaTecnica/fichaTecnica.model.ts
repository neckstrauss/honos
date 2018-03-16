

import { EntityGeneral } from '../../entity-general.model';
export class FichaTecnica extends EntityGeneral{

  constructor(
    public fechaComite?: string,
    public numeroComite?: string,
    public comite?: number,
    public numeroFicha?: number,
    public fechaPostulacion?: string,
    public claseConciliacion?: string,
    public apoderadoNombre?: string,
    public apoderadoDocumento?: string,
    public apoderadoTarjeta?: string,
    public fechaRechazo?: string,
    public razonRechazo?: string,
    public intervencion?: string,
    public resultado?: string,
    public razon?: string,
    
  ) 
  {
    super();
    
  };

}