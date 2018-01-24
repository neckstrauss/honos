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
    console.log("paso por table menu");
    model.loadDataSet();
  }
  
  columnas: any[] = [{ nombre: '#' },
  { nombre: 'Label', key: 'label' },
  { nombre: 'Descripción', key: 'descripcion' },
  { nombre: 'Estado', key: 'estado' },
  { nombre: '' }
  ];

}