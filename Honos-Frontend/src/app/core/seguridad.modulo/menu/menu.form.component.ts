import {Menu} from '../../../model/entities/seguridad/menu.model';
import {Opcion} from '../../../model/entities/seguridad/opcion.model';
import {MenuModel} from '../../../model/repositories/seguridad/menu.repository.model';
import {OpcionModel} from '../../../model/repositories/seguridad/opcion.repository.model';
import {ModalFormGenericoComponent} from '../../../shared/modal-form-generico/modal-form-generico.component';
import {Component, ViewChild} from "@angular/core";

@Component({
  selector: "menu-modal-form",
  moduleId: module.id,
  templateUrl: "menu.form.component.html",
  styleUrls: ["menu.form.component.scss"]
})
export class MenuFormComponent {

  opcionSeleted: number;

  @ViewChild('md') md: ModalFormGenericoComponent;

  private locator = (p: any, id: number) => p.id == id;

  constructor(private model: MenuModel, private opcionesModel: OpcionModel) {
  }

  addOpcion() {
    let index = this.md.object.opciones.findIndex(p => this.locator(p, this.opcionSeleted));

    if (index == -1) {
      let opcion: Opcion = new Opcion();
      Object.assign(opcion, this.opcionesModel.get(this.opcionSeleted));

      if (this.md.object.opciones == undefined) {
        this.md.object.opciones = new Array<Opcion>();
      }
      this.md.object.opciones.push(opcion);
    }
  }

  deleteOpcion(id: number) {
    let index = this.md.object.opciones.findIndex(p => this.locator(p, id));
    if (index > -1) {
      this.md.object.opciones.splice(index, 1);
    }
  }

  actualizarOpciones(id: number) {
    this.opcionesModel.loadListaParaMenu(id);
  }

}

