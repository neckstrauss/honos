import { Menu } from '../../../model/entities/seguridad/menu.model';
import { Rol } from '../../../model/entities/seguridad/rol.model';
import {MenuModel} from '../../../model/repositories/seguridad/menu.repository.model';
import { RolModel } from '../../../model/repositories/seguridad/rol.repository.model';
import {ModalFormGenericoComponent} from '../../../shared/modal-form-generico/modal-form-generico.component';
import {Component, ViewChild} from "@angular/core";

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
    this.menuModel.loadDataSet();
  }

  addMenu() {

    let opcion: Menu = new Menu();
    Object.assign(opcion, this.menuModel.get(this.opcionSeleted));

    if (this.md.object.menus == undefined) {
      this.md.object.menus = new Array<Menu>();
    }

    this.md.object.menus.push(opcion);
  }
  
  deleteMenu(id: number) {
      let index = this.md.object.menu.findIndex(p => this.locator(p, id));
      if (index > -1) {
        this.md.object.menu.splice(index, 1);
      }
  }

}

