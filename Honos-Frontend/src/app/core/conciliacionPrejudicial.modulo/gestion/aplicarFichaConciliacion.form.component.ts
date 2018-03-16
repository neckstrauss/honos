import { ComiteConciliacion } from '../../../model/entities/comiteConciliacion/comiteConciliacion.model';
import { FichaConciliacion } from '../../../model/entities/comiteConciliacion/fichaTecnica/fichaConciliacion.model';
import { ConciliacionPrejudicial } from '../../../model/entities/conciliacionPrejudicial/conciliacionPrejudicial.model';
import { ComiteConciliacionModel } from '../../../model/repositories/comiteConciliacion/comiteConciliacion.repository.model';
import { FichaConciliacionModel } from '../../../model/repositories/comiteConciliacion/fichaTecnica/fichaConciliacion.repository.model';
import { SharedState, SHARED_STATE } from '../../../model/sharedState.model';
import {GenericoFormControl, GenericoFormGroup} from '../../../shared/modal-form-generico/form-generico.model';
import {ModalFormGenericoComponent} from '../../../shared/modal-form-generico/modal-form-generico.component';
import {Component, ViewChild, Inject} from "@angular/core";
import {Validators, NgForm} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
declare var $: any;

@Component({
  selector: "aplicarFichaConciliacion-modal-form",
  moduleId: module.id,
  templateUrl: "aplicarFichaConciliacion.form.component.html",
  styleUrls: ["aplicarFichaConciliacion.form.component.scss"]
})
export class AplicarFichaConciliacionFormComponent {
  
  @ViewChild('md') md: ModalFormGenericoComponent;
  readOnly: boolean = false;
  
  object: FichaConciliacion = new FichaConciliacion();
  
  constructor(@Inject(SHARED_STATE) private stateEvents: Observable<SharedState>, 
              private model: FichaConciliacionModel,
              private modelComite: ComiteConciliacionModel
              ) {
     stateEvents.subscribe((update) => {
      this.object = this.model.newObject();
       
      if (update.id != undefined) {
        //Object.assign(this.object, this.model.get(update.id));
        this.object.conciliacion = update.id;
        modelComite.loadDataSetActivos();
      }

    });
    
  }

  form: GenericoFormGroup = new GenericoFormGroup(
    {
      comite: new GenericoFormControl(
        "comite", "nombrecampo", "",
        [
          Validators.required,         
        ]
      )    
    });
  
  submitForm(form: NgForm) {
    if (form.valid) {
      this.model.save(this.object);
      form.reset();
      $("#modalFicha").modal("hide");
      // this.model.loadDataSet();
    }
  }

}
