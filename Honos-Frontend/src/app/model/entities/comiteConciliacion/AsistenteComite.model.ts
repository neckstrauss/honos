import { MiembroComite } from '../generales/miembroComite.model';
import { ComiteConciliacion } from './comiteConciliacion.model';
export class AsistenteComite  {

  constructor(
    public id?: number,
    public comite?: ComiteConciliacion,
    public miembro?: MiembroComite,
    public razonInasistencia?: string
  ) {
    };


}
