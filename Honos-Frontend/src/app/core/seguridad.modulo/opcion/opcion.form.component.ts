import {OpcionModel} from '../../../model/repositories/seguridad/opcion.repository.model';
import {GenericoFormControl, GenericoFormGroup} from '../../../shared/modal-form-generico/form-generico.model';
import {Component} from "@angular/core";
import {Validators} from '@angular/forms';

@Component({
  selector: "opcion-modal-form",
  moduleId: module.id,
  templateUrl: "opcion.form.component.html",
  styleUrls: ["opcion.form.component.scss"]
})
export class OpcionFormComponent {

  constructor(private model: OpcionModel) {

  }

  form: GenericoFormGroup = new GenericoFormGroup(
    {
      label: new GenericoFormControl(
        "Label", "label", "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30)
        ]
      ),

      uri: new GenericoFormControl(
        "URI", "uri", "",
        Validators.compose(
          [
            Validators.required,
            //        Validators.pattern("^[A-Za-z ]+$"),
            Validators.minLength(5),
            Validators.maxLength(30)
          ]
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
}



