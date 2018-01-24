//import {MessageService} from '../messages/message.service';
//import { Message } from "../messages/message.model";
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Model} from "./repositories/repository.model";
import {RestDataSource} from "./dataSources/rest.datasource";
import {Product} from "./entities/product.model";
import { ProductoModel } from './repositories/producto.repository.model';

@Injectable()
export class ModelResolver {

  constructor(
    private model: ProductoModel,
    private dataSource: RestDataSource,
    /*private messages: MessageService*/) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Product[]> {
    if (this.model.getDataSet().length == 0) {
     // this.messages.reportMessage(new Message("Loading data..."));
     //implementar sistema de mensajes
      return this.dataSource.getData();
    }
  }
}