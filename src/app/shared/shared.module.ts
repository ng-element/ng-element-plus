import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { NelMessageModule } from 'ng-element-ui/message';
import { CodeComponent } from './components/code/code.component';
import { DemoComponent } from './components/demo/demo.component';
import { DocComponent } from './components/doc/doc.component';
import { NavBottomComponent } from './components/nav-bottom/nav-bottom.component';
import { HighLightPipe, MarkedPipe } from './pipe';

@NgModule({
  declarations: [
    CodeComponent,
    DemoComponent,
    DocComponent,
    NavBottomComponent,
    HighLightPipe,
    MarkedPipe
  ],
  exports: [
    CodeComponent,
    DemoComponent,
    DocComponent,
    NavBottomComponent,
    HighLightPipe,
    MarkedPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ClipboardModule,
    NelMessageModule
  ]
})

export class SharedModule { }
