import {ConciliacionPrejudicial} from '../../../model/entities/conciliacionPrejudicial/conciliacionPrejudicial.model';
import {EvaluacionDelRiesgo} from '../../../model/entities/conciliacionPrejudicial/evaluacionDelRiesgo.model';
import {Natural} from '../../../model/entities/generales/natural.model';
import {Tercero} from '../../../model/entities/generales/tercero.model';
import {ConciliacionPrejudicialModel} from '../../../model/repositories/conciliacionPrejudicial/conciliacionPrejudicial.repository.model';
import {ApoderadoModel} from '../../../model/repositories/generales/apoderado.repository.model';
import {DespachoModel} from '../../../model/repositories/generales/despacho.repository.model';
import {MedioControlJudicialModel} from '../../../model/repositories/generales/medioControlJudicial.repository.model';
import {TemaModel} from '../../../model/repositories/generales/tema.repository.model';
import {TerceroModel} from '../../../model/repositories/generales/tercero.repository.model';
import {GenericoFormControl, GenericoFormGroup} from '../../../shared/modal-form-generico/form-generico.model';
import {ModalFormGenericoComponent} from '../../../shared/modal-form-generico/modal-form-generico.component';
import {Component, ViewChild} from "@angular/core";
import {Validators} from '@angular/forms';
import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';


@Component({
  selector: "conciliacionPrejudicial-modal-form",
  moduleId: module.id,
  templateUrl: "conciliacionPrejudicial.form.component.html",
  styleUrls: ["conciliacionPrejudicial.form.component.scss"]
})
export class ConciliacionPrejudicialFormComponent {

  @ViewChild('md') md: ModalFormGenericoComponent;
  readOnly: boolean = false;

  constructor(private model: ConciliacionPrejudicialModel,
    private terceroModel: TerceroModel,
    private temaModel: TemaModel,
    private medioControlJudicialModel: MedioControlJudicialModel,
    private despachoModel: DespachoModel
  ) {
    this.temaModel.loadDataSetActivos();
    this.terceroModel.loadDataSetActivos();
    this.medioControlJudicialModel.loadDataSetActivos();
    this.despachoModel.loadDataSetActivos();
  }

  convocanteSeleted: Tercero;
  filtro: string = '';

  filtrar(): Tercero[] {
    return this.terceroModel.getDataSet().filter(p => this.filtro.length >= 3 && p.nombreCompleto.toUpperCase().includes(this.filtro.toUpperCase()));
  }

  addConvocante() {

    if (this.md.object.convocantes == undefined) {
      this.md.object.convocantes = new Array<Tercero>();
    }

    let index = this.md.object.convocantes.findIndex(p => this.md.locator(p, this.convocanteSeleted.id));

    if (index == -1) {
      let aux: Tercero = new Tercero();
      Object.assign(aux, this.terceroModel.get(this.convocanteSeleted.id));

      this.md.object.convocantes.push(aux);
    }

    this.convocanteSeleted = null;

  }

  deleteConvocante(id: number) {
    let index = this.md.object.convocantes.findIndex(p => this.md.locator(p, id));
    if (index > -1) {
      //this.terceroModel.getDataSet().push(this.md.object.convocantes[index]);
      this.md.object.convocantes.splice(index, 1);
    }
  }

  convocadoSeleted: Tercero;
  filtroConvocados: string = '';

  filtrarConvocados(): Tercero[] {
    return this.terceroModel.getDataSet().filter(p => this.filtroConvocados.length >= 3
      && p.nombreCompleto.toUpperCase().includes(this.filtroConvocados.toUpperCase()));
  }

  addconvocado() {
    if (this.md.object.convocados == undefined) {
      this.md.object.convocados = new Array<Tercero>();
    }
    let index = this.md.object.convocados.findIndex(p => this.md.locator(p, this.convocadoSeleted.id));
    if (index == -1) {
      let aux: Tercero = new Tercero();
      Object.assign(aux, this.terceroModel.get(this.convocadoSeleted.id));
      this.md.object.convocados.push(aux);
    }
    this.convocadoSeleted = null;
  }

  deleteconvocado(id: number) {
    let index = this.md.object.convocados.findIndex(p => this.md.locator(p, id));
    if (index > -1) {
      //inlcuye en el listado seleccionable el objeto que se esta elimando  
      //this.terceroModel.getDataSet().push(this.md.object.convocantes[index]);
      this.md.object.convocados.splice(index, 1);
    }
  }


  fechaNotificacionOptions: INgxMyDpOptions = {
    dateFormat: 'yyyy/mm/dd',
  };

  fechaNotificacion: any;

  onfechaNotificacionChanged(event: IMyDateModel): void {
    this.md.object.fechaNotificacion = event.formatted;
  }

  fechaRadicacionInternaOptions: INgxMyDpOptions = {
    dateFormat: 'yyyy/mm/dd',
  };

  fechaRadicacionInterna: any;

  onfechaRadicacionInternaChanged(event: IMyDateModel): void {
    this.md.object.fechaRadicacionInterna = event.formatted;
  }

  form: GenericoFormGroup = new GenericoFormGroup(
    {
      numeroRadicacionIterno: new GenericoFormControl(
        "N�mero Radicado Interno", "numeroRadicacionIterno", "",
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(5),
          Validators.pattern("^[0-9]+$"),
        ], true
      ),
      fechaRadicacionInterna: new GenericoFormControl(
        "Fecha Radicación", "fechaRadicacionInterna", "",
        Validators.compose(
          [
            Validators.required]
        ), true
      ),
      fechaNotificacion: new GenericoFormControl(
        "Fecha Fecha Notificacion", "fechaNotificacion", "",
        [Validators.required], true
      ),
      apoderado: new GenericoFormControl(
        "Apoderado", "apoderado", "",
        Validators.compose(
          [
            Validators.required]
        )
      ),

      convocados: new GenericoFormControl(
        "Convocados", "convocados", "",
        [], false
      ),

      convocantes: new GenericoFormControl(
        "Convocantes", "convocantes", "",
        [], false
      ),

      medioControlJudicial: new GenericoFormControl(
        "Medio Control Judicial", "medioControlJudicial", "",
        [Validators.required]
      ),

      tema: new GenericoFormControl(
        "Tema", "tema", "",
        [Validators.required]
      ),

      despacho: new GenericoFormControl(
        "Despacho", "despacho", "",
        [], false
      ),

      pretension: new GenericoFormControl(
        "Pretensión", "despacho", "",
        [
          Validators.required,
        ], false
      ),

      radicadoProcuraduria: new GenericoFormControl(
        "Radicado Procuraduria", "radicadoProcuraduria", "",
        [
          Validators.pattern("^[0-9]+$"),
        ], false
      ),


      estado: new GenericoFormControl(
        "Estado", "estado", "",
        [Validators.required], true, true
      )
    });

  actualizarOpciones(id: number) {

    if (!this.md.object.analisis.evaluacionRiesgo) {
      this.md.object.analisis.evaluacionRiesgo = new EvaluacionDelRiesgo();
    }

    this.convocanteSeleted = null;

    this.convocadoSeleted = null;

    if (this.md.editing) {
      let d: string = this.md.object.fechaNotificacion;
      this.fechaNotificacion = {date: {year: parseInt(d.slice(0, 4)), month: parseInt(d.slice(5, 7)), day: parseInt(d.slice(8, 10))}};
    }
    else {
      this.fechaNotificacion = null;
    }

    if (this.md.editing) {
      let fechaRadicacionInternaAux: string = this.md.object.fechaRadicacionInterna;
      this.fechaRadicacionInterna = {date: {year: parseInt(fechaRadicacionInternaAux.slice(0, 4)), month: parseInt(fechaRadicacionInternaAux.slice(5, 7)), day: parseInt(fechaRadicacionInternaAux.slice(8, 10))}};
    }
    else {
      this.fechaRadicacionInterna = null;
    }
  }

  evaluacionRiesgo() {
    this.md.object.analisis.evaluacionRiesgo.riesgoCondena = this.calcularPorcentaje(this.md.object.analisis.evaluacionRiesgo);
    this.md.object.analisis.evaluacionRiesgo.probabilidadCondena = this.calcularProbabilidad(this.md.object.analisis.evaluacionRiesgo.riesgoCondena);
  }
  
  calcularProbabilidad(porcentaje: number)
  {
    if (porcentaje > 50) {
        return 'MUY PROBABLE';
    }else if(porcentaje < 25){
      return 'REMOTO';
    }else
    {
      return 'POSIBLE';
    }  
    
  }

  calcularPorcentaje(evaluacion: EvaluacionDelRiesgo) {
    let fortalezaDefensa              = 0.25 * this.getPeso(evaluacion.fortalezaDefensa);
    let fortalezaProbatoriaDefensa    = 0.2  * this.getPeso(evaluacion.fortalezaProbatoriaDefensa);
    let fortalezaProbatoriaDemandante = 0.2  * this.getPeso(evaluacion.fortalezaProbatoriaDemandante);
    let nivelJurisprudencial          = 0.25 * this.getPeso(evaluacion.nivelJurisprudencial);
    let riesgosProcesales             = 0.1  * this.getPeso(evaluacion.riesgosProcesales);
    
    return (fortalezaDefensa + fortalezaProbatoriaDefensa + fortalezaProbatoriaDemandante + nivelJurisprudencial + riesgosProcesales)*100;
  }

  getPeso(cal: string): number {

    switch (cal) {
      case 'ALT': {
        //statements; 
        return 0.95;
      }
      case 'MED': {
        //statements; 
        return 0.5;
      }

      case 'BAJ': {
        //statements; 
        return 0.05;
      }

      default: {
        //statements; 
        return 0;
      }
    }

  }

}
