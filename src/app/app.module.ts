import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NelBacktopModule } from 'ng-element-ui/backtop';
import { NelScrollbarModule } from 'ng-element-ui/scrollbar';
import { NelAlertModule } from 'ng-element-ui/alert';
import { SharedModule } from './shared/shared.module';

import { AppService } from './app.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    NelBacktopModule,
    NelScrollbarModule,
    NelAlertModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
