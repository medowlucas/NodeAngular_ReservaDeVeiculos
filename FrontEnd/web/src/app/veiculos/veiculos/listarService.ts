import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListarService {

  public arrayVeiculos:any=[];
  public url:string='https://localhost:3000/veiculos';
  
  constructor(private _http: HttpClient) {
   }
  
  listarVeiculos(){
    this._http.get(this.url).toPromise().then(data=> console.log(data) );
   }

}
