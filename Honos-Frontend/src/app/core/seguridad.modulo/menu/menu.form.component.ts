import {Menu} from '../../../model/entities/seguridad/menu.model';
import {Opcion} from '../../../model/entities/seguridad/opcion.model';
import {MenuModel} from '../../../model/repositories/seguridad/menu.repository.model';
import {OpcionModel} from '../../../model/repositories/seguridad/opcion.repository.model';
import { GenericoFormControl, GenericoFormGroup } from '../../../shared/modal-form-generico/form-generico.model';
import {ModalFormGenericoComponent} from '../../../shared/modal-form-generico/modal-form-generico.component';
import {Component, ViewChild} from "@angular/core";
import { Validators } from '@angular/forms';

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

      idDivInterno: new GenericoFormControl(
        "Id Div Interno", "idDivInterno", "",
        Validators.compose(
          [
            Validators.required,
            //        Validators.pattern("^[A-Za-z ]+$"),
            Validators.minLength(5),
            Validators.maxLength(30)
          ]
        )
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


  addOpcion() {
    
    if (this.md.object.opciones == undefined) {
        this.md.object.opciones = new Array<Opcion>();
      }
    
    let index = this.md.object.opciones.findIndex(p => this.locator(p, this.opcionSeleted));

    if (index == -1) {
      let opcion: Opcion = new Opcion();
      Object.assign(opcion, this.opcionesModel.get(this.opcionSeleted));
      
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

