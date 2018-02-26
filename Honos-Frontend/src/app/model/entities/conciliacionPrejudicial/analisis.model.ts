
import { EvaluacionDelRiesgo } from './evaluacionDelRiesgo.model';
export class Analisis {

  constructor(
    public hechos?: string,
    public pretensiones?: string,
    public analisisCaducidad?: string,
    public analisisJuridicoNormativo?: string,
    public jurisprudencia?: string,
    public analisisProbatorio?: string,
    public posicionJuridicaAbogado?: string,
    public evaluacionRiesgo?: EvaluacionDelRiesgo
  ) 
  {
    
  };

}