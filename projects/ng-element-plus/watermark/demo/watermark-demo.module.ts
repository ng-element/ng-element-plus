import { NgModule } from '@angular/core';
import { NpWatermarkModule } from 'ng-element-plus/watermark';
import { NpDemoWatermarkBasicComponent } from './watermark-demo-basic.component';

@NgModule({
  declarations: [
    NpDemoWatermarkBasicComponent
  ],
  exports: [
    NpDemoWatermarkBasicComponent
  ],
  imports: [
    NpWatermarkModule
  ]
})

export class NpDemoWatermarkModule { }
