import { EntityGeneral } from '../entity-general.model';
import { Apoderado } from '../generales/apoderado.model';
import { MiembroComite } from '../generales/miembroComite.model';
import { AsistenteComite } from './AsistenteComite.model';


export class ComiteConciliacion extends EntityGeneral{

  constructor(
    public fechaComite?: string,
    public tipoComite?: string,
    public motivoCancelacion?: string,
    public asistentes?: AsistenteComite[],
    public apoderadosExtraordinario?: Apoderado[],
    public proposiciones?: string,
    public horaFinal?: string,
  ) 
  {
    super();
    
  };

}