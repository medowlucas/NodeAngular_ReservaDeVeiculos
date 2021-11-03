import { Agenda } from './../Agenda';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiService';

@Component({
  selector: 'app-reserva-veiculo',
  templateUrl: './reserva-veiculo.component.html',
  styleUrls: ['./reserva-veiculo.component.css']
})
export class ReservaVeiculoComponent implements OnInit {

  public todaAgenda:Array<Agenda>=[];

  constructor(public _apiService:ApiService) {
   }

  ngOnInit(): void {
    this.loadAgenda();
  }

  async loadAgenda(){
    this.todaAgenda = await this._apiService.getAgenda();
  }

}
