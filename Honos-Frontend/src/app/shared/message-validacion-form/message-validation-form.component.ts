import { Model } from '../../model/repositories/repository.model';
import { GenericoFormGroup } from '../modal-form-generico/form-generico.model';
import {Component, Input} from "@angular/core";

@Component({
  selector: "message-validation",
  moduleId: module.id,

  templateUrl: "./message-validation-form.component.html",
  styleUrls: ["./message-validation-form.component.scss"]
})
export class MessageValidationFormComponent {

  @Input('property') property: string;
  @Input('form') form: GenericoFormGroup;

  constructor() { }
 
}