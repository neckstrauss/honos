import { ModelModule } from "../../model/model.module";
import { ModelResolver } from "../../model/model.resolver";
import { SHARED_STATE, SharedState } from "../../model/sharedState.model";
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { Subject } from "rxjs/Subject";


let routing = RouterModule.forChild([

//  { path: "tableg", component: TableComponent, resolve: { model: ModelResolver } },
  { path: "", redirectTo: "/productg/tableg", pathMatch: "full" },

]);

@NgModule({
  imports: [CommonModule, FormsModule, ModelModule, routing, SharedModule],
  declarations: [],
  exports: [],
  providers: [{ provide: SHARED_STATE, useValue: new Subject<SharedState>() }]

})
export class SeguridadModule { }

