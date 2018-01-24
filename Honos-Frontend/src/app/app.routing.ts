import {Routes, RouterModule} from "@angular/router";




const routes: Routes = [
  {
    path: "productg",
    loadChildren: "./core/producto/producto.module#ProductoModule",
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