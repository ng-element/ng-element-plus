import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { QuickstartRoutingModule } from './quickstart-routing.module';
import { QuickstartComponent } from './quickstart.component';

@NgModule({
  declarations: [
    QuickstartComponent
  ],
  exports: [
    QuickstartComponent
  ],
  imports: [
    SharedModule,
    QuickstartRoutingModule
  ]
})

export class QuickstartModule { }
