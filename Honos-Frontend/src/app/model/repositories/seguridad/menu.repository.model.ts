import {Model} from '../repository.model';
import {RestDataSource} from '../../dataSources/rest.datasource';
import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import { MessageService } from '../../../shared/messages/message.service';
import {Menu} from '../../entities/seguridad/menu.model';
import { HttpEventType } from '@angular/common/http';

@Injectable()
export class MenuModel extends Model<Menu> {
 

  private menuUsuario: Menu[] = new Array<Menu>();

  constructor(private ds: RestDataSource, message: MessageService) {
    super(ds, message, environment.url + "honos/seguridad/menus");
    //super.loadDataSet();
  }
  
  loadListaParaRol(id:number = null): void {
    this.ds.setUrl(super.getUrl()+(id?"/"+id:"")).getData().subscribe(event => {
      if (event.type === HttpEventType.Response) {
        super.setData(event.body.items); 
      }
    });
  }

   newObject(): Menu {
    return new Menu();
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