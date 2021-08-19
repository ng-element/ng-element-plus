import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatermarkComponent } from './watermark.component';

const routes: Routes = [
  {
    path: '',
    component: WatermarkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WatermarkRoutingModule { }
