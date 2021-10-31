import { ListarService } from './listarService';
import { Component, OnInit } from '@angular/core';
import { Veiculo } from './Veiculo';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  public _rows:Array<Veiculo> = [];

  constructor(private _listarService: ListarService) {
   }
 
  ngOnInit(): void {
    this.loadVeiculos();
  }

  async loadVeiculos(){
    this._rows = await this._listarService.getVeiculos();
  }
}
