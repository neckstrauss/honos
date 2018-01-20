import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: '', component: DashboardComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
  
}
