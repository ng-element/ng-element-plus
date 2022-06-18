import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NpPieChartComponent } from './pie-chart.component';

@NgModule({
  declarations: [
    NpPieChartComponent,
  ],
  exports: [
    NpPieChartComponent,
  ],
  imports: [
    CommonModule,
  ]
})

export class NpPieChartModule { }
