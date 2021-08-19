import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpWatermarkComponent } from './watermark.component';

@NgModule({
  declarations: [
    NpWatermarkComponent
  ],
  exports: [
    NpWatermarkComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NpWatermarkModule { }
