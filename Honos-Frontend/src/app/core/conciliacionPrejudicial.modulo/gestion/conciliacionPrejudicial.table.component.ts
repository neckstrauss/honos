import { Tercero } from '../../../model/entities/generales/tercero.model';
import { ConciliacionPrejudicialModel } from '../../../model/repositories/conciliacionPrejudicial/conciliacionPrejudicial.repository.model';
import { SHARED_STATE, SharedState, MODES } from '../../../model/sharedState.model';
import { Component, Inject } from "@angular/core";
import { Observer } from 'rxjs';

@Component({
  selector: "radicacionConciliacionTable",
  moduleId: module.id,
  templateUrl: "conciliacionPrejudicial.table.component.html",
  styleUrls: ['conciliacionPrejudicial.table.component.scss']
})
export class ConciliacionPrejudicialTableComponent {

  constructor(private model: ConciliacionPrejudicialModel, @Inject(SHARED_STATE) private observer: Observer<SharedState>) {
    model.loadDataSet();
  }
  
  mostrarConvocantes(array:Tercero[]): string
  {
    let aux: string = ''; 
    array.forEach(p=> { aux = aux + p.nombreCompleto + "\n"});
    
    return aux;
  }
  
  /*configuracion de columnas*/
  columnas: any[] = [{ nombre: '#' },
  { nombre: 'Radicado PR', key: 'radicadoProcuraduria' },
  { nombre: 'Fecha Radicación', key: 'fechaRadicacionInterna' },
  { nombre: 'Convocantes', key: 'convocantes' },
  { nombre: 'Responsable', key: 'apoderado.nombreCompleto' },
  { nombre: 'Estado', key: 'estado' },
  { nombre: '' }
  ];
  
  
  asignarComite(key: number) {
    this.observer.next(new SharedState(MODES.ASIGNAR, key));
  }

}