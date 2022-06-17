import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NpDemoLineChartModule } from '../../../projects/ng-element-plus/line-chart/demo/line-chart-demo.module';
import { SharedModule } from './../shared/shared.module';
import { LineChartRoutingModule } from './line-chart-routing.module';
import { LineChartComponent } from './line-chart.component';

@NgModule({
  declarations: [
    LineChartComponent,
  ],
  exports: [
    LineChartComponent,
  ],
  imports: [
    CommonModule,
    NpDemoLineChartModule,
    SharedModule,
    LineChartRoutingModule,
  ]
})

export class LineChartModule { }
