import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'watermark',
    pathMatch: 'full'
  },
  {
    path: 'installation',
    loadChildren: () => import('./installation/installation.module').then(m => m.InstallationModule)
  },
  {
    path: 'quickstart',
    loadChildren: () => import('./quickstart/quickstart.module').then(m => m.QuickstartModule)
  },
  {
    path: 'watermark',
    loadChildren: () => import('./watermark/watermark.module').then(m => m.WatermarkModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
