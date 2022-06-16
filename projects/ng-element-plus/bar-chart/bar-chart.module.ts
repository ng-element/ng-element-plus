import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NpBarChartComponent } from './bar-chart.component';

@NgModule({
  declarations: [
    NpBarChartComponent
  ],
  exports: [
    NpBarChartComponent
  ],
  imports: [
    CommonModule
  ]
})

export class NpBarChartModule { }
