import { Agenda } from './Agenda';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veiculo } from './Veiculo';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public arrayBuscaPlaca:any=[];
  public url:string='http://localhost:3000';

  constructor(private _http: HttpClient) {
   }
  
  getVeiculos():any{
    var arrayVeiculos:any=[];
    this._http.get<any>(this.url + '/veiculos').toPromise().then(async data=>{
      for(let i=0;i<data.length;i++){
      await arrayVeiculos.push(data[i]);
    }})
    return arrayVeiculos;
  }

  getAgenda():any{
    var arrayAgenda:any=[];
    this._http.get<any>(this.url + '/agenda').toPromise().then(async data=>{
      for(let i=0;i<data.length;i++){
      await arrayAgenda.push(data[i]);
    }})
    return arrayAgenda;
  }

  getVeiculosIndex(index:number){
    this._http.get<any>(this.url + '/veiculos/' + index.toString()).toPromise().then( async data=>{
      return data[0];
    })
  }

  postVeiculo(veiculo:Veiculo) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this._http.post(this.url+'/veiculos', JSON.stringify(veiculo), {
      headers: headers
    })
    .subscribe(data => {
      console.log(data);
    });
  }

  postAgenda(agenda:Agenda) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this._http.post(this.url+'/agenda', JSON.stringify(agenda), {
      headers: headers
    })
    .subscribe(data => {
      console.log(data);
    });
  }

 

}
