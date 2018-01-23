import { Usuario } from '../../../model/entities/seguridad/usuario.model';
import { RolModel } from '../../../model/repositories/seguridad/rol.repository.model';
import { UsuarioModel } from '../../../model/repositories/seguridad/usuario.repository.model';
import {ModalFormGenericoComponent} from '../../../shared/modal-form-generico/modal-form-generico.component';
import {Component, ViewChild} from "@angular/core";

@Component({
  selector: "usuario-modal-form",
  moduleId: module.id,
  templateUrl: "usuario.form.component.html",
  styleUrls: ["usuario.form.component.scss"]
})
export class UsuarioFormComponent {

    @ViewChild('md') md: ModalFormGenericoComponent; 

  constructor(private model: UsuarioModel, private rolModel: RolModel) {
  }

  

}

