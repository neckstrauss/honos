import { Component } from "@angular/core";
import { ProductoModel } from '../../model/repositories/producto.repository.model';


@Component({
  selector: "paTable",
  moduleId: module.id,
  templateUrl: "table.component.html",
  styleUrls: ['table.component.scss']
})
export class TableComponent {

  constructor(private model: ProductoModel) {
  }

  columnas: any[] = [{ nombre: '#' },
  { nombre: 'ID', key: 'id' },
  { nombre: 'Nombre', key: 'name' },
  { nombre: 'Categoria', key: 'category' },
  { nombre: 'Precio', key: 'price' },
  { nombre: '' }
  ];

}