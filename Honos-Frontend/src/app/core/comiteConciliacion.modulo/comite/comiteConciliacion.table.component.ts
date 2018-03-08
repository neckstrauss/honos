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
  { nombre: 'Fecha Comit�', key: 'fechaComite' },
  { nombre: 'Tipo Comit�', key: 'tipoComite' },
  { nombre: 'Estado', key: 'estado' },
  { nombre: '' }
  ];

}