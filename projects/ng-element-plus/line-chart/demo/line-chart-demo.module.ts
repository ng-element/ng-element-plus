import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NpLineChartModule } from './../../line-chart';
import { NpDemoLineChartBasicComponent } from './line-chart-demo-basic.component';

@NgModule({
  declarations: [
    NpDemoLineChartBasicComponent,
  ],
  exports: [
    NpDemoLineChartBasicComponent,
  ],
  imports: [
    CommonModule,
    NpLineChartModule,
  ]
})

export class NpDemoLineChartModule { }
