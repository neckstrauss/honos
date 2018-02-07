import {Routes, RouterModule} from "@angular/router";




const routes: Routes = [
  {
    path: "seguridad",
    loadChildren: "./core/seguridad.modulo/seguridad.module#SeguridadModule",
  },
  {
    path: "conciliacion",
    loadChildren: "./core/conciliacionPrejudicial.modulo/conciliacion-prejudicial.module#ConciliacionPrejudicialModule",
  },
  {
    path: "dashboard",
    loadChildren: "./core/dashboard/dashboard.module#DashboardModule",
  },
  {path: "", redirectTo: "/dashboard", pathMatch: "full"}
  //  ,
  //  {path: "**", component: NotFoundComponent}
];

export const routing = RouterModule.forRoot(routes);