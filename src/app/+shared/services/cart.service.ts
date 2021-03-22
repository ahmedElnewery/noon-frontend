import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  _url="";

  constructor(private _http:HttpClient) { }
 addToCart(id:string){
  this._url="http://localhost:8000/api/products/add-to-cart/"+id;
  return this._http.get<any>(this._url).pipe(
    catchError(err => { return throwError(err.message); })
  )}
}

