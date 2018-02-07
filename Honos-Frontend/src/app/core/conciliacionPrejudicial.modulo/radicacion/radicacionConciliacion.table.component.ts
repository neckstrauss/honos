import { ConciliacionPrejudicialModel } from '../../../model/repositories/conciliacionPrejudicial/conciliacionPrejudicial.repository.model';
import { Component } from "@angular/core";

@Component({
  selector: "radicacionConciliacionTable",
  moduleId: module.id,
  templateUrl: "radicacionConciliacion.table.component.html",
  styleUrls: ['radicacionConciliacion.table.component.scss']
})
export class RadicacionConciliacionPrejudicialTableComponent {

  constructor(private model: ConciliacionPrejudicialModel) {
    model.loadDataSet();
  }
  
  /*configuracion de columnas*/
  columnas: any[] = [{ nombre: '#' },
  { nombre: 'No Radicado', key: 'numeroRadicacionIterno' },
  { nombre: 'Fecha Radicación', key: 'fechaRadicacionInterna' },
  { nombre: 'Convocantes', key: 'convocantes' },
  { nombre: 'Responsable', key: 'apoderado.primerNombre' },
  { nombre: 'Estado', key: 'estado' },
  { nombre: '' }
  ];

}