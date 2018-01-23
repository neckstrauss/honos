import {Model} from '../repository.model';
import {RestDataSource} from '../../dataSources/rest.datasource';
import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {Menu} from '../../entities/seguridad/menu.model';

@Injectable()
export class MenuModel extends Model<Menu> {

  private menuUsuario: Menu[] = new Array<Menu>();

  constructor(private ds: RestDataSource) {
    super(ds, environment.url + "honos/seguridad/menus");
    //super.loadDataSet();
    
  }


  loadMenuUsuario(): void {
    
    this.menuUsuario = [
      new Menu(
        1,
        'Administración',
        'admin',
        '',
        'activo',
        [
//          {
//            label: 'Productos',
//            uri: '/productg'
//          }
        ]
      )
    ]
  }

  getMenuUsuario(): Menu[] {
    return this.menuUsuario;
  }


}