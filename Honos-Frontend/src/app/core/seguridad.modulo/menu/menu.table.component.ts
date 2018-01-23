import { MenuModel } from '../../../model/repositories/seguridad/menu.repository.model';
import { Component } from "@angular/core";

@Component({
  selector: "menuTable",
  moduleId: module.id,
  templateUrl: "menu.table.component.html",
  styleUrls: ['menu.table.component.scss']
})
export class MenuTableComponent {

  constructor(private model: MenuModel) {
    model.loadDataSet();
  }
  
  columnas: any[] = [{ nombre: '#' },
  { nombre: 'Label', key: 'label' },
 // { nombre: 'Id Div Interno', key: 'idDivInterno' },
  { nombre: 'Descripción', key: 'descripcion' },
  { nombre: 'Estado', key: 'estado' },
  { nombre: '' }
  ];

}