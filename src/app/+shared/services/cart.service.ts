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
  getToken(){
    return localStorage.getItem("userToken")
    }
 addToCart(productId:string){

  this._url="http://localhost:8000/api/products/cart"
  return this._http.post<any>(this._url,{productId:productId},{
    headers:{
      'Content-Type':'application/json',
      Authorization:`Bearer ${this.getToken()}`
    }
  }).pipe(
    catchError(err => { return throwError(err.message); })
  )}
}

