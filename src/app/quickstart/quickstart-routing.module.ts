import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuickstartComponent } from './quickstart.component';

const routes: Routes = [
  {
    path: '',
    component: QuickstartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class QuickstartRoutingModule { }
