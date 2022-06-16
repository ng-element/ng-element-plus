import { NgModule } from '@angular/core';
import { NpDemoBarChartModule } from '../../../projects/ng-element-plus/bar-chart/demo/bar-chart-demo.module';
import { SharedModule } from '../shared/shared.module';
import { BarChartRoutingModule } from './bar-chart-routing.module';
import { BarChartComponent } from './bar-chart.component';

@NgModule({
  declarations: [
    BarChartComponent
  ],
  exports: [
    BarChartComponent
  ],
  imports: [
    NpDemoBarChartModule,
    SharedModule,
    BarChartRoutingModule
  ]
})

export class BarChartModule { }
