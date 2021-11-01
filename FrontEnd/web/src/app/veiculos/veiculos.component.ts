import { ListarService } from './listarService';
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
  
  constructor(private _listarService: ListarService) {
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
    this._rows = await this._listarService.getVeiculos();
  }

  async insertVeiculo(veiculo:Veiculo){
    await this._listarService.postVeiculo(veiculo);
    window.location.reload()
  }


}
