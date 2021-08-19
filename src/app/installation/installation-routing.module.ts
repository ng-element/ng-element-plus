import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstallationComponent } from './installation.component';

const routes: Routes = [
  {
    path: '',
    component: InstallationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InstallationRoutingModule { }
