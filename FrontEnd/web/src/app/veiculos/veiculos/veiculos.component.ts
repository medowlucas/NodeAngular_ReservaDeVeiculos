import { ListarService } from './listarService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  constructor(private _listarService: ListarService) { }
 
  public _row:Array<any> = [{a:'oi',b:"tchau"},{a:'oi'}];

  ngOnInit(): void {
    this.loadListarVeiculos();
  }

  loadListarVeiculos(){
    return this._listarService.listarVeiculos();
  }
}
