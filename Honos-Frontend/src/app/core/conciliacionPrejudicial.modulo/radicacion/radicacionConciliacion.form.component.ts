import {ConciliacionPrejudicial} from '../../../model/entities/conciliacionPrejudicial/conciliacionPrejudicial.model';
import { Natural } from '../../../model/entities/generales/natural.model';
import { Tercero } from '../../../model/entities/generales/tercero.model';
import {ConciliacionPrejudicialModel} from '../../../model/repositories/conciliacionPrejudicial/conciliacionPrejudicial.repository.model';
import { ApoderadoModel } from '../../../model/repositories/generales/apoderado.repository.model';
import { TerceroModel } from '../../../model/repositories/generales/tercero.repository.model';
import {GenericoFormControl, GenericoFormGroup} from '../../../shared/modal-form-generico/form-generico.model';
import {ModalFormGenericoComponent} from '../../../shared/modal-form-generico/modal-form-generico.component';
import {Component, ViewChild} from "@angular/core";
import {Validators} from '@angular/forms';
import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';


@Component({
  selector: "radicacionConciliacion-modal-form",
  moduleId: module.id,
  templateUrl: "radicacionConciliacion.form.component.html",
  styleUrls: ["radicacionConciliacion.form.component.scss"]
})
export class RadicacionConciliacionPrejudicialFormComponent {

  @ViewChild('md') md: ModalFormGenericoComponent;
  readOnly: boolean = false;
  
  constructor(private model: ConciliacionPrejudicialModel, private apoderadoModel: ApoderadoModel, private terceroModel: TerceroModel) {
    this.apoderadoModel.loadDataSetActivos();   
  }
  
convocanteSeleted: Tercero;
  filtro: string = '';
  
  filtrar(): Tercero[]{
    return this.terceroModel.getDataSet().filter(p => this.filtro.length >= 3 && p.nombreCompleto.toUpperCase().includes(this.filtro.toUpperCase())) ;
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
  
  fecha = new Date();
  
  
  fechaNotificacionOptions: INgxMyDpOptions = {
    dateFormat: 'yyyy/mm/dd',
    disableSince: {year: this.fecha.getFullYear(), month: this.fecha.getMonth() + 1, day: this.fecha.getDate() + 1 }
  };

  fechaNotificacion: any;

  onfechaNotificacionChanged(event: IMyDateModel): void {
    this.md.object.fechaNotificacion = event.formatted;
  }
  
  fechaRadicacionInternaOptions: INgxMyDpOptions = {
    dateFormat: 'yyyy/mm/dd',
    disableSince: {year: this.fecha.getFullYear(), month: this.fecha.getMonth() + 1, day: this.fecha.getDate() + 1 }
  };

  fechaRadicacionInterna: any;

  onfechaRadicacionInternaChanged(event: IMyDateModel): void {
    this.md.object.fechaRadicacionInterna = event.formatted;
  }

  form: GenericoFormGroup = new GenericoFormGroup(
    {
      numeroRadicacionIterno: new GenericoFormControl(
        "Número Radicado Interno", "numeroRadicacionIterno", "",
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(5),
          Validators.pattern("^[0-9]+$"),
        ]
      ),
      fechaRadicacionInterna: new GenericoFormControl(
        "Fecha RadicaciÃ³n", "fechaRadicacionInterna", "",
        Validators.compose(
          [
            Validators.required]
        )
      ),
      fechaNotificacion: new GenericoFormControl(
        "Fecha Fecha Notificacion", "fechaNotificacion", "",
        Validators.compose(
          [
            Validators.required]
        )
      ),
      apoderado: new GenericoFormControl(
        "Apoderado", "apoderado", "",
        Validators.compose(
          [
            Validators.required]
        ),
      ),
      
      convocantes: new GenericoFormControl(
        "Convocantes", "convocantes", "",
        [], false
      ),
      
      estado: new GenericoFormControl(
        "Estado", "estado", "",
        Validators.compose(
          []
        ),true
      )
    });
   
  actualizarOpciones(id: number) {
    
    this.terceroModel.loadDataSetActivos();
    this.convocanteSeleted = null;
    
    if(this.md.object.estado && this.md.object.estado.id != 'CRD')
    {
      this.readOnly = true;
    }  
    else
    {
      this.readOnly = false;
    }  
    
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

}
