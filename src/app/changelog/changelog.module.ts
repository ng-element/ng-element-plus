import { NgModule } from '@angular/core';
import { ChangelogRoutingModule } from './changelog-routing.module';
import { ChangelogComponent } from './changelog.component';

@NgModule({
  declarations: [
    ChangelogComponent
  ],
  exports: [
    ChangelogComponent
  ],
  imports: [
    ChangelogRoutingModule
  ]
})

export class ChangelogModule { }
