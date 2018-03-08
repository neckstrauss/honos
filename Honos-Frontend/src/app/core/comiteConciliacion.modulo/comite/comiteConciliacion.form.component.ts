import { ComiteConciliacionModel } from '../../../model/repositories/comiteConciliacion/comiteConciliacion.repository.model';
import {GenericoFormControl, GenericoFormGroup} from '../../../shared/modal-form-generico/form-generico.model';
import {ModalFormGenericoComponent} from '../../../shared/modal-form-generico/modal-form-generico.component';
import {Component, ViewChild} from "@angular/core";
import {Validators} from '@angular/forms';

@Component({
  selector: "comiteConciliacion-modal-form",
  moduleId: module.id,
  templateUrl: "comiteConciliacion.form.component.html",
  styleUrls: ["comiteConciliacion.form.component.scss"]
})
export class ComiteConciliacionFormComponent {
  
  @ViewChild('md') md: ModalFormGenericoComponent;
  readOnly: boolean = false;

  constructor(private model: ComiteConciliacionModel /*, private otroModel: OtroModel*/) {
  }

  form: GenericoFormGroup = new GenericoFormGroup(
    {
      label: new GenericoFormControl(
        "Label", "nombrecampo", "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
          Validators.pattern("^[A-Za-z ]+$"),
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
  
  actualizarOpciones(id: number) {
  /*
  	//aqui se pueden llmar los metodos de carga de datos
  	// para las listas 
    this.opcionesModel.loadListaParaMenu(id);
  */  
  }

}
