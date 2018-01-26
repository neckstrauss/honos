import {Usuario} from '../../../model/entities/seguridad/usuario.model';
import {RolModel} from '../../../model/repositories/seguridad/rol.repository.model';
import {UsuarioModel} from '../../../model/repositories/seguridad/usuario.repository.model';
import {GenericoFormGroup, GenericoFormControl} from '../../../shared/modal-form-generico/form-generico.model';
import {ModalFormGenericoComponent} from '../../../shared/modal-form-generico/modal-form-generico.component';
import {Component, ViewChild} from "@angular/core";
import {Validators} from '@angular/forms';

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

  form: GenericoFormGroup = new GenericoFormGroup(
    {
      usuario: new GenericoFormControl(
        "Usuario", "usuario", "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30)
        ]
      ),

      password: new GenericoFormControl(
        "Password", "password", "",
        Validators.compose(
          [
            Validators.required,
            //        Validators.pattern("^[A-Za-z ]+$"),
            Validators.minLength(4),
            Validators.maxLength(12)
          ]
        )
      ),
      rol: new GenericoFormControl(
        "Rol", "rol", "",
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

  cargarListados() {
    this.rolModel.loadDataSetActivos();
  }

}

