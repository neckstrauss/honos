import { UsuarioModel } from '../../../model/repositories/seguridad/usuario.repository.model';
import { Component } from "@angular/core";

@Component({
  selector: "usuarioTable",
  moduleId: module.id,
  templateUrl: "usuario.table.component.html",
  styleUrls: ['usuario.table.component.scss']
})
export class UsuarioTableComponent {

  constructor(private model: UsuarioModel) {
    model.loadDataSet();
  }
  
  columnas: any[] = [{ nombre: '#' },
  { nombre: 'Usuario', key: 'usuario' },
  { nombre: 'Rol', key: 'rol.nombre' },
  { nombre: 'Estado', key: 'estado' },
  { nombre: '' }
  ];

}