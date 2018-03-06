
export class EvaluacionDelRiesgo {

  constructor(
    public fortalezaDefensa?: string,
    public fortalezaProbatoriaDefensa?: string,
    public fortalezaProbatoriaDemandante?: string,
    public riesgosProcesales?: string,
    public nivelJurisprudencial?: string,
    public riesgoCondena?: string,
    public probabilidadCondena?: string
  ) 
  {
    
  };

}