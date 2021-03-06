import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPeluchesComponent } from './lista-peluches/lista-peluches.component';
import { CarritoComponent } from './carrito/carrito.component';
import { AboutComponent } from './about/about.component';
import { PeluchesComponent } from './peluches/peluches.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPeluchesComponent,
    CarritoComponent,
    AboutComponent,
    PeluchesComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
