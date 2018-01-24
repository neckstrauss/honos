import { ProductoModel } from "../../model/repositories/producto.repository.model";
import {Component} from "@angular/core";

@Component({
  selector: "modal-form",
  moduleId: module.id,
  templateUrl: "form.component.html",
  styleUrls: ["form.component.scss"]
})
export class FormComponent {

 
  
  constructor(private model: ProductoModel) {

  }   

}

