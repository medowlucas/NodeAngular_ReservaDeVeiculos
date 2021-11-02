
import { HttpClientModule } from '@angular/common/http';
import { ListarService } from './veiculos/listarService';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { CadastroVeiculoComponent } from './veiculos/cadastro-veiculo/cadastro-veiculo.component';
import { ReservaVeiculoComponent } from './veiculos/reserva-veiculo/reserva-veiculo.component';
@NgModule({
  declarations: [
    AppComponent,
    VeiculosComponent,
    CadastroVeiculoComponent,
    ReservaVeiculoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ListarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
