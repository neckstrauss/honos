import { EntityGeneral } from '../entity-general.model';
import { Apoderado } from '../generales/apoderado.model';
import { Despacho } from '../generales/despacho.model';
import { MedioControlJudicial } from '../generales/medioControlJudicial.model';
import { Tema } from '../generales/tema.model';
import { Tercero } from '../generales/tercero.model';

export class ConciliacionPrejudicial extends EntityGeneral{

  constructor(
    public numeroRadicacionIterno?: number,
    public fechaRadicacionInterna?: string,
    public fechaNotificacion?: string,
    public tema?: Tema,
    public medioControlJudicial?: MedioControlJudicial,
    public apoderado?: Apoderado,
    public convocados?: Tercero[],
    public convocantes?: Tercero[],
    public despacho?: Despacho,
    public pretension?: number,
    public radicadoProcuraduria?: string
  ) 
  {
    super();
    
  };

}