import { RolModel } from '../../../model/repositories/seguridad/rol.repository.model';
import { Component } from "@angular/core";

@Component({
  selector: "rolTable",
  moduleId: module.id,
  templateUrl: "rol.table.component.html",
  styleUrls: ['rol.table.component.scss']
})
export class RolTableComponent {

  constructor(private model: RolModel) {
    //model.loadDataSet();
  }
  
  columnas: any[] = [{ nombre: '#' },
  { nombre: 'Nombre Rol', key: 'nombre' },
  { nombre: 'Descripción', key: 'descripcion' },
  { nombre: 'Estado', key: 'estado' },
  { nombre: '' }
  ];

}