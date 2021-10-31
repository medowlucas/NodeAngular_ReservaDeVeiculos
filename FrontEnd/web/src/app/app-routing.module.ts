import { ReservaVeiculoComponent } from './veiculos/reserva-veiculo/reserva-veiculo.component';
import { CadastroVeiculoComponent } from './veiculos/cadastro-veiculo/cadastro-veiculo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculosComponent } from './veiculos/veiculos.component';

const routes: Routes = [
  {path: '',pathMatch: 'full', redirectTo: 'app-veiculos'},
  {path: 'app-veiculos', component: VeiculosComponent},
  {path: 'app-cadastro-veiculo', component: CadastroVeiculoComponent},
  {path: 'app-reserva-veiculo', component: ReservaVeiculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
