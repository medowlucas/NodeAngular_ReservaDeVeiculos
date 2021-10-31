import { HttpClientModule } from '@angular/common/http';
import { ListarService } from './veiculos/veiculos/listarService';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VeiculosComponent } from './veiculos/veiculos/veiculos.component';
@NgModule({
  declarations: [
    AppComponent,
    VeiculosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ListarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
