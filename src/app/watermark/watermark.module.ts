import { NgModule } from '@angular/core';
import { NpDemoWatermarkModule } from '../../../projects/ng-element-plus/watermark/demo/watermark-demo.module';
import { SharedModule } from '../shared/shared.module';
import { WatermarkRoutingModule } from './watermark-routing.module';
import { WatermarkComponent } from './watermark.component';

@NgModule({
  declarations: [
    WatermarkComponent
  ],
  exports: [
    WatermarkComponent
  ],
  imports: [
    NpDemoWatermarkModule,
    SharedModule,
    WatermarkRoutingModule
  ],
})

export class WatermarkModule { }
