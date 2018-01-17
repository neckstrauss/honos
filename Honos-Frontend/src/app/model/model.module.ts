import { ModelResolver } from './model.resolver';
import {NgModule} from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import {Model} from "./repositories/repository.model";
import { RestDataSource } from "./dataSources/rest.datasource";
import { ProductoModel } from './repositories/producto.repository.model';


@NgModule({
  imports: [HttpClientModule],
  providers: [ ProductoModel, RestDataSource, ModelResolver]
})
export class ModelModule {}