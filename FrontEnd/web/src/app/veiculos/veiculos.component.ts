import { ApiService } from './apiService';
import { Component, OnInit } from '@angular/core';
import { Veiculo } from './Veiculo';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  public _rows:Array<Veiculo>=[];
  public veiculo:Veiculo = {placa:'123',modelo:'Opala',ano:1950,estado:false};
  
  constructor(private _apiService: ApiService) {
  }
 
  ngOnInit():void {
    // this.buscarPlaca('b');
    this.loadVeiculos();
    
    // this.insertVeiculo(this.veiculo);
  }

  buscarPlaca(placa:string){
    console.log(this._rows.find(function(a:any){
       return a.placa == placa
    }));
  }

  async loadVeiculos(){
    this._rows = await this._apiService.getVeiculos();
  }

  async insertVeiculo(veiculo:Veiculo){
    await this._apiService.postVeiculo(veiculo);
    window.location.reload()
  }


}
