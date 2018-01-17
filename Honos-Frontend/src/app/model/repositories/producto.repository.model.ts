import { Product } from '../entities/product.model';
import { Model } from './repository.model';
import { RestDataSource } from '../dataSources/rest.datasource';
import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable()
export class ProductoModel extends Model<Product> {
  constructor(private ds: RestDataSource) {    
    super(ds, environment.url + "store/v1/products");    
    super.loadDataSet();
  }  
}