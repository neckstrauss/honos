import { Opcion } from '../../../model/entities/seguridad/opcion.model';
import { OpcionModel } from '../../../model/repositories/seguridad/opcion.repository.model';
import { Component } from "@angular/core";

@Component({
  selector: "opcionTable",
  moduleId: module.id,
  templateUrl: "opcion.table.component.html",
  styleUrls: ['opcion.table.component.scss']
})
export class OpcionTableComponent {

  constructor(private model: OpcionModel) {
    model.loadDataSet();
  }
  
  columnas: any[] = [{ nombre: '#' },
  { nombre: 'Label', key: 'label' },
  { nombre: 'URI', key: 'uri' },
  { nombre: 'Estado', key: 'estado' },
  { nombre: '' }
  ];

}