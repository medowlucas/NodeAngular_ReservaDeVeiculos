import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veiculo } from './Veiculo';


@Injectable({
  providedIn: 'root'
})
export class ListarService {

  public arrayVeiculos:any=[];
  public url:string='http://localhost:3000';

  constructor(private _http: HttpClient) {
   }
  
  getVeiculos(){
    this._http.get<any>(this.url + '/veiculos').toPromise().then(async data=>{
      for(let i=0;i<data.length;i++){
      await this.arrayVeiculos.push(data[i])
    }});
      return this.arrayVeiculos;
    }

  //  getVeiculosIndex(index:number){
  //   this._http.get<any>(this.url + '/veiculos/' + index.toString()).toPromise().then(data=>{
  //     return new Veiculo(data.placa,data.modelo,data.ano,data.estado) });
  // }

}
