import {AsistenteComite} from '../../../model/entities/comiteConciliacion/AsistenteComite.model';
import { Apoderado } from '../../../model/entities/generales/apoderado.model';
import {MiembroComite} from '../../../model/entities/generales/miembroComite.model';
import {ComiteConciliacionModel} from '../../../model/repositories/comiteConciliacion/comiteConciliacion.repository.model';
import { ApoderadoModel } from '../../../model/repositories/generales/apoderado.repository.model';
import {MiembroComiteModel} from '../../../model/repositories/generales/miembroComite.repository.model';
import {GenericoFormControl, GenericoFormGroup} from '../../../shared/modal-form-generico/form-generico.model';
import {ModalFormGenericoComponent} from '../../../shared/modal-form-generico/modal-form-generico.component';
import {Component, ViewChild} from "@angular/core";
import {Validators} from '@angular/forms';
import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';

@Component({
  selector: "comiteConciliacion-modal-form",
  moduleId: module.id,
  templateUrl: "comiteConciliacion.form.component.html",
  styleUrls: ["comiteConciliacion.form.component.scss"]
})

export class ComiteConciliacionFormComponent {

  @ViewChild('md') md: ModalFormGenericoComponent;
  readOnly: boolean = false;

  constructor(private model: ComiteConciliacionModel, 
              private miembroModel: MiembroComiteModel, 
              private apoderadoModel: ApoderadoModel
            ) {
    this.miembroModel.loadDataSetActivos();
  }

  form: GenericoFormGroup = new GenericoFormGroup(
    {
      tipoComite: new GenericoFormControl(
        "Tipo Comité", "tipoComite", "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
        ]
      ),
      fechaComite: new GenericoFormControl(
        "Fecha Comité", "fechaComite", "",
        [
          Validators.required,
        ]
      ),
      
      fechaLimiteRecepcion: new GenericoFormControl(
        "Fecha Limite Recepción", "fechaLimiteRecepcion", "",
        [
          Validators.required,
        ]
      ),
      
      asistentes: new GenericoFormControl(
        "Miembros", "asistentes", "",
        [
        ]
      ),
      apoderadosExtraordinario: new GenericoFormControl(
        "apoderadosExtraordinario", "apoderadosExtraordinario", "",
        [
        ]
      ),
      estado: new GenericoFormControl(
        "Estado", "estado", "",
        Validators.compose(
          [
            Validators.required]
        )
      )
    });
  
  fecha = new Date();

  fechaLimiteRecepcionOptions: INgxMyDpOptions = {
    dateFormat: 'yyyy/mm/dd',
    disableWeekends: true,
    disableUntil: {year: this.fecha.getFullYear(), month: this.fecha.getMonth() + 1, day: this.fecha.getDate() - 1}
  };

  fechaLimiteRecepcion: any;

  onfechaLimiteRecepcionChanged(event: IMyDateModel): void {
    this.md.object.fechaLimiteRecepcion = event.formatted;
  }
    
  fechaComiteOptions: INgxMyDpOptions = {
    dateFormat: 'yyyy/mm/dd',
    disableWeekends: true,
    disableUntil: {year: this.fecha.getFullYear(), month: this.fecha.getMonth() + 1, day: this.fecha.getDate() - 1}
  };

  fechaComite: any;

  onfechaComiteChanged(event: IMyDateModel): void {
    this.md.object.fechaComite = event.formatted;    
     
    let copy: INgxMyDpOptions = JSON.parse(JSON.stringify(this.fechaLimiteRecepcionOptions)); 
    copy.disableSince = {year: event.jsdate.getFullYear(), month: event.jsdate.getMonth() + 1, day: event.jsdate.getDate()};
    this.fechaLimiteRecepcionOptions = copy;
  }

  miembroSeleted: MiembroComite;
  filtroAsistentes: string = '';

  filtrarMiembros(): MiembroComite[] {
    return this.miembroModel.getDataSet().filter(p => this.filtroAsistentes.length >= 0
      && p.nombreCompleto.toUpperCase().includes(this.filtroAsistentes.toUpperCase()));
  }

  addMiembro() {
    if (this.md.object.asistentes == undefined) {
      this.md.object.asistentes = new Array<AsistenteComite>();
    }
    let index = this.md.object.asistentes.findIndex(p => this.md.locator(p.miembro, this.miembroSeleted.id));
    if (index == -1) {
      let aux: AsistenteComite = new AsistenteComite();
      aux.miembro = new MiembroComite();
      Object.assign(aux.miembro, this.miembroModel.get(this.miembroSeleted.id));
      this.md.object.asistentes.push(aux);
    }
    this.miembroSeleted = null;
  }

  deleteMiembro(id: number) {
    let index = this.md.object.asistentes.findIndex(p => this.md.locator(p.miembro, id));
    if (index > -1) {
      //inlcuye en el listado seleccionable el objeto que se esta elimando  
      //this.terceroModel.getDataSet().push(this.md.object.convocantes[index]);
      this.md.object.asistentes.splice(index, 1);
    }
  }
  
  apoderadosSeleted: Apoderado;
  filtroApoderadosAutorizados: string = '';
    
  filtrarApoderadosAutorizados(): Apoderado[]{
    return this.apoderadoModel.getDataSet().filter(p => this.filtroApoderadosAutorizados.length >= 0 
      && p.nombreCompleto.toUpperCase().includes(this.filtroApoderadosAutorizados.toUpperCase())) ;
  }
  
  addapoderados() 
  {
    if (this.md.object.apoderadosExtraordinario == undefined) {
      this.md.object.apoderadosExtraordinario = new Array<Apoderado>();
    }
    let index = this.md.object.apoderadosExtraordinario.findIndex(p => this.md.locator(p, this.apoderadosSeleted.id));
    if (index == -1) {
      let aux: Apoderado = new Apoderado();
      Object.assign(aux, this.apoderadoModel.get(this.apoderadosSeleted.id));
      this.md.object.apoderadosExtraordinario.push(aux);
    }    
    this.apoderadosSeleted = null;    
  }

  deleteapoderados(id: number) {
    let index = this.md.object.apoderadosExtraordinario.findIndex(p => this.md.locator(p, id));
    if (index > -1) {
    //inlcuye en el listado seleccionable el objeto que se esta elimando  
      //this.terceroModel.getDataSet().push(this.md.object.convocantes[index]);
      this.md.object.apoderadosExtraordinario.splice(index, 1);
    }
  }


  actualizarOpciones(id: number) {
    
    
    
    if (this.md.editing) {
      let fechaComiteAux: string = this.md.object.fechaComite;
      this.fechaComite = {
        date: {
          year: parseInt(fechaComiteAux.slice(0, 4)),
          month: parseInt(fechaComiteAux.slice(5, 7)), day: parseInt(fechaComiteAux.slice(8, 10))
        }
      };
    }
    else {
      this.fechaComite = null;
    }

    
    if (this.md.editing) {
      let fechaLimiteRecepcionAux: string = this.md.object.fechaLimiteRecepcion;
      this.fechaLimiteRecepcion = {date: {year: parseInt(fechaLimiteRecepcionAux.slice(0, 4)), 
        month: parseInt(fechaLimiteRecepcionAux.slice(5, 7)), day: parseInt(fechaLimiteRecepcionAux.slice(8, 10))}};
    } 
    else {
      this.fechaLimiteRecepcion = null;
    }
    
    this.miembroSeleted = null;

    
    if (this.md.object.asistentes == undefined) {
      this.md.object.asistentes = new Array<AsistenteComite>();
      this.miembroModel.getDataSet().forEach(p => {
           let aux = new AsistenteComite();
            aux.miembro = p;            
            this.md.object.asistentes.push(aux);
      }
      );

    }
    
    this.apoderadoModel.loadDataSetActivos();
    this.apoderadosSeleted = null;

  }

}
