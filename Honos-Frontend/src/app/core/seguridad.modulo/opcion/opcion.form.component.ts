import { OpcionModel } from '../../../model/repositories/seguridad/opcion.repository.model';
import {Component} from "@angular/core";

@Component({
  selector: "opcion-modal-form",
  moduleId: module.id,
  templateUrl: "opcion.form.component.html",
  styleUrls: ["opcion.form.component.scss"]
})
export class OpcionFormComponent {
  
  constructor(private model: OpcionModel) {

  }   

}

