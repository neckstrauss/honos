import { ComiteConciliacionModel } from '../../../model/repositories/comiteConciliacion/comiteConciliacion.repository.model';
import { Component } from "@angular/core";

@Component({
  selector: "comiteConciliacionTable",
  moduleId: module.id,
  templateUrl: "comiteConciliacion.table.component.html",
  styleUrls: ['comiteConciliacion.table.component.scss']
})
export class ComiteConciliacionTableComponent {

  constructor(private model: ComiteConciliacionModel) {
    model.loadDataSet();
  }
  
  /*configuracion de columnas*/
  columnas: any[] = [{ nombre: '#' },
  { nombre: 'Fecha Comité', key: 'fechaComite' },
  { nombre: 'Tipo Comité', key: 'tipoComite' },
  { nombre: 'Estado', key: 'estado' },
  { nombre: '' }
  ];

}