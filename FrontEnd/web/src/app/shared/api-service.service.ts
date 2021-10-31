import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Veiculos } from '../shared/veiculos';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url:string = 'http://localhost:3000';

  constructor(private _http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })}
  
  getVeiculos():Observable<Veiculos>{
    return this._http.get<Veiculos>(this.url + '/veiculos')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getVeiculosPlaca(placa:string):Observable<Veiculos>{
    return this._http.get<Veiculos>(this.url + '/veiculos' + placa)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
  
}
