import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatavizRoutingModule } from './dataviz/dataviz-routing.module';
import { DatavizModule } from './dataviz/dataviz.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DatavizRoutingModule,
    DatavizModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
