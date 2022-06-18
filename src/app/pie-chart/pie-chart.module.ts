import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NpDemoPieChartModule } from './../../../projects/ng-element-plus/pie-chart/demo/pie-chart-demo.module';
import { SharedModule } from './../shared/shared.module';
import { PieChartRoutingModule } from './pie-chart-routing.module';
import { PieChartComponent } from './pie-chart.component';

@NgModule({
  declarations: [
    PieChartComponent,
  ],
  exports: [
    PieChartComponent,
  ],
  imports: [
    CommonModule,
    NpDemoPieChartModule,
    SharedModule,
    PieChartRoutingModule,
  ]
})

export class PieChartModule { }
