import { ListarService } from './listarService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  constructor(private _listarService: ListarService) {
   }
 
  public _row:any;

  ngOnInit(): void {
    this.loadVeiculos(1);
  }

  loadVeiculos(index:number){
    this._listarService.getVeiculos();
  }
}
