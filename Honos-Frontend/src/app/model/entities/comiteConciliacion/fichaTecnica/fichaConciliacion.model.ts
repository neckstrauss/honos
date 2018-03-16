

import { EntityGeneral } from '../../entity-general.model';
import { FichaTecnica } from './fichaTecnica.model';
export class FichaConciliacion extends FichaTecnica{

  constructor(
    public conciliacion?: number,
    public cuantiaPretensiones?: string,
    public medioControlJudicial?: string,
    public tema?: string,
    public despacho?: string,
    public radicado?: string,
    public hechos?: string,
    public pretensiones?: string,
    public analisisCaducidad?: string,
    public analisisJuridicoNormativo?: string,
    public jurisprudencia?: string,
    public analisisProbatorio?: string,
    public posicionJuridicaAbogado?: string,
    public fortalezaDefensa?: string,
    public fortalezaProbatoriaDefensa?: string,
    public fortalezaProbatoriaDemandante?: string,
    public riesgosProcesales?: string,
    public nivelJurisprudencial?: string,
    public riesgoCondena?: string,
    public probabilidadCondena?: string,
    public convocantes?: string,
    public convocados?: string,
    
  ) 
  {
    super();
    
  };

}