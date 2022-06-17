import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NpLineChartComponent } from './line-chart.component';

@NgModule({
  declarations: [
    NpLineChartComponent,
  ],
  exports: [
    NpLineChartComponent,
  ],
  imports: [
    CommonModule
  ]
})

export class NpLineChartModule { }
