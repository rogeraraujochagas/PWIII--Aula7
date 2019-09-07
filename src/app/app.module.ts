import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploComponent } from './exemplo/exemplo.component';
import { InterpolationComponent } from './interpolation/interpolation.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemploComponent,
    InterpolationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
