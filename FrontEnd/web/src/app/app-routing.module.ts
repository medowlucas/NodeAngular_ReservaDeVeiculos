import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculosComponent } from './veiculos/veiculos/veiculos.component';

const routes: Routes = [
  {path: '',pathMatch: 'full', redirectTo: 'app-veiculos'},
  {path: 'app-veiculos', component: VeiculosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
