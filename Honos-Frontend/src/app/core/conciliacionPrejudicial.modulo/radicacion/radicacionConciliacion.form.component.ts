import {ConciliacionPrejudicial} from '../../../model/entities/conciliacionPrejudicial/conciliacionPrejudicial.model';
import {ConciliacionPrejudicialModel} from '../../../model/repositories/conciliacionPrejudicial/conciliacionPrejudicial.repository.model';
import { ApoderadoModel } from '../../../model/repositories/generales/apoderado.repository.model';
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

  constructor(private model: ConciliacionPrejudicialModel, private apoderadoModel: ApoderadoModel) {
    this.apoderadoModel.loadDataSetActivos();
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
        )
      ),
      estado: new GenericoFormControl(
        "Estado", "estado", "",
        Validators.compose(
          [
            Validators.required]
        )
      )
    });

  actualizarOpciones(id: number) {
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
