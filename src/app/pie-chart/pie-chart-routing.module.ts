import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PieChartComponent } from './pie-chart.component';

const routes: Routes = [
  {
    path: '',
    component: PieChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PieChartRoutingModule { }
