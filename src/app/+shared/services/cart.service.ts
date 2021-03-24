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

  this._url="http://localhost:8000/api/cart/addcart"
  return this._http.post<any>(this._url,{productId:productId},{
    headers:{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${this.getToken()}`
    }
  }).pipe(
    catchError(err => { return throwError(err.message); })
  )}
  getAllCarts(){
    this._url="http://localhost:8000/api/cart/getcart"
    return this._http.get<any>(this._url,{
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${this.getToken()}`,

      }
    }).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }
}

