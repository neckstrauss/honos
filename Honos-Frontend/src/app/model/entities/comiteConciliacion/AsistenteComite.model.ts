import { MiembroComite } from '../generales/miembroComite.model';
export class AsistenteComite  {

  constructor(
    public comite?: number,
    public miembro?: MiembroComite,
    public razonInasistencia?: string
  ) {
    };


}
