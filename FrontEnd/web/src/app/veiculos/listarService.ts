import { Veiculo } from './Veiculo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListarService {

  public arrayVeiculos:any;
  public url:string='http://localhost:3000';
  
  constructor(private _http: HttpClient) {
   }
  
  async getVeiculos(){
    // return this._http.get(this.url + '/veiculos').toPromise().then(data=> console.log(data));
    // this._http.get(this.url + '/veiculos').subscribe( data=>{return data});
    this._http.get<Veiculo>(this.url + '/veiculos').subscribe(data => {return data;
    })
   }

   async getVeiculosIndex(index:number){
    return await this._http.get(this.url + '/veiculos/' + index.toString()).toPromise().then(data=> console.log(data) );;
  }

}
