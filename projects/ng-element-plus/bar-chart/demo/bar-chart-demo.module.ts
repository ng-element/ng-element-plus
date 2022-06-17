import { NgModule } from '@angular/core';
import { NpBarChartModule } from './../../bar-chart';
import { NpDemoBarChartBasicComponent } from './bar-chart-demo-basic.component';

@NgModule({
  declarations: [
    NpDemoBarChartBasicComponent
  ],
  exports: [
    NpDemoBarChartBasicComponent
  ],
  imports: [
    NpBarChartModule
  ]
})

export class NpDemoBarChartModule { }
