import { MenuModel } from '../../../model/repositories/seguridad/menu.repository.model';
import {Component} from "@angular/core";

@Component({
  selector: "menu-modal-form",
  moduleId: module.id,
  templateUrl: "menu.form.component.html",
  styleUrls: ["menu.form.component.scss"]
})
export class MenuFormComponent {
  
  constructor(private model: MenuModel) {

  }   

}

