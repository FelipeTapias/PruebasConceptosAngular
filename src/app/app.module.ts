import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficoBarrasComponent } from './grafico-barras/grafico-barras.component';
import { GraficoLineasComponent } from './grafico-lineas/grafico-lineas.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficoBarrasComponent,
    GraficoLineasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
