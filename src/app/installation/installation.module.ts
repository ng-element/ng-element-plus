import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { InstallationRoutingModule } from './installation-routing.module';
import { InstallationComponent } from './installation.component';

@NgModule({
  declarations: [
    InstallationComponent
  ],
  exports: [
    InstallationComponent
  ],
  imports: [
    SharedModule,
    InstallationRoutingModule
  ]
})

export class InstallationModule { }
