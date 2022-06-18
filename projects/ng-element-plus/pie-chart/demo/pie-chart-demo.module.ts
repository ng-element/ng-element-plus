import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NpPieChartModule } from './../../pie-chart';
import { NpDemoPieChartBasicComponent } from './pie-chart-demo-basic.component';

@NgModule({
  declarations: [
    NpDemoPieChartBasicComponent,
  ],
  exports: [
    NpDemoPieChartBasicComponent,
  ],
  imports: [
    CommonModule,
    NpPieChartModule,
  ]
})

export class NpDemoPieChartModule { }
