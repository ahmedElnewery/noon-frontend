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
  console.log(this._http.get<any>(this._url)+"sssss")
  return this._http.get<any>(this._url);
 }
}
