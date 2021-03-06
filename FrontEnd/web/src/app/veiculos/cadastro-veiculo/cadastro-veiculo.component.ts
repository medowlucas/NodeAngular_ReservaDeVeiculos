import { Veiculo } from './../Veiculo';
import { ApiService } from '../apiService';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.component.html',
  styleUrls: ['./cadastro-veiculo.component.css']
})

export class CadastroVeiculoComponent{

  public _rows:Array<Veiculo>=[];
  public veiculo:any;
  public placa:string = '';
  public modelo!:string;
  public ano:number = 0;
  public estado:boolean = true;

  constructor(private _apiService: ApiService) {
  }
 
  async insertVeiculo(veiculo:Veiculo){
    await this._apiService.postVeiculo(veiculo);
    window.location.reload()
  }

  onSubmit(){
    this.veiculo = new Veiculo(this.placa,this.modelo,Number(this.ano),this.estado);
  }

  formClean(){
    this.placa = '';
    this.modelo = '';
    this.ano = 0;
    this.estado = true;
    window.location.reload();
  }

  confirmacao() {
    if(this.placa != ''){
      if(confirm(`Confirma o Cadastrado desse Veículo?`)) {
        this.insertVeiculo(this.veiculo);
        alert(`Veículo Cadastrado com Sucesso!`);
      }
      this.formClean();
    }else{
      alert('Preencha a Placa')
    }
  }

}
