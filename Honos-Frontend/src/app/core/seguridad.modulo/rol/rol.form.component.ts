import {Menu} from '../../../model/entities/seguridad/menu.model';
import {Rol} from '../../../model/entities/seguridad/rol.model';
import {MenuModel} from '../../../model/repositories/seguridad/menu.repository.model';
import {RolModel} from '../../../model/repositories/seguridad/rol.repository.model';
import { GenericoFormControl, GenericoFormGroup } from '../../../shared/modal-form-generico/form-generico.model';
import {ModalFormGenericoComponent} from '../../../shared/modal-form-generico/modal-form-generico.component';
import {Component, ViewChild} from "@angular/core";
import { Validators } from '@angular/forms';

@Component({
  selector: "rol-modal-form",
  moduleId: module.id,
  templateUrl: "rol.form.component.html",
  styleUrls: ["rol.form.component.scss"]
})
export class RolFormComponent {

  opcionSeleted: number;
  @ViewChild('md') md: ModalFormGenericoComponent;
  private locator = (p: any, id: number) => p.id == id;

  constructor(private model: RolModel, private menuModel: MenuModel) {
    model.loadDataSet();
  }

  form: GenericoFormGroup = new GenericoFormGroup(
    {
      rol: new GenericoFormControl(
        "Rol", "rol", "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30)
        ]
      ),

      descripcion: new GenericoFormControl(
        "Descripcion", "descripcion", "",
        Validators.compose(
          [
            Validators.required,
            //        Validators.pattern("^[A-Za-z ]+$"),
            Validators.minLength(20),
            Validators.maxLength(440)
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

  addMenu() {

    if (this.md.object.menus == undefined) {
      this.md.object.menus = new Array<Menu>();
    }

    let index = this.md.object.menus.findIndex(p => this.locator(p, this.opcionSeleted));

    if (index == -1) {
      let opcion: Menu = new Menu();
      Object.assign(opcion, this.menuModel.get(this.opcionSeleted));


      this.md.object.menus.push(opcion);
    }
  }

  deleteMenu(id: number) {
    let index = this.md.object.menus.findIndex(p => this.locator(p, id));
    if (index > -1) {
      this.menuModel.getDataSet().push(this.md.object.opciones[index]);
      this.md.object.menus.splice(index, 1);
    }
  }

  actualizarMenus(id: number) {
    this.menuModel.loadListaParaRol(id);
  }

}

