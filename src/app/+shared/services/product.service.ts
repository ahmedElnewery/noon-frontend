import { IReview } from './../interfaces/IReview';
import { ProductAPI } from './../../../@core/APIs/productsAPI';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IProduct } from '../interfaces/IProduct';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }



  getProduct(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(ProductAPI.GET_ALL_PRODUCTS).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }
  getProductByID(id): Observable<IProduct> {
    return this._http.get<IProduct>(`${ProductAPI.GET_PRODUCT_BY_ID}/${id}`).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }
  addProduct(product): Observable<IProduct> {

    return this._http.post<IProduct>(ProductAPI.ADD_PRODUCT,
      { ...product }
    ).pipe(
      catchError(err => { return throwError(err.message) })
    )
  }
  //function to get by subcategory
  getProductsBySubcategory(subcategory): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`${ProductAPI.GET_PRODUCT_BY_SUBCATEGORY}/${subcategory}`).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }

  //function to get only all electronic product
  getElectronicProduct(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`${ProductAPI.GET_ALL_PRODUCTS}/bycategory/electronics`).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }

  //function to get only all home product
  getHomeProduct(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`${ProductAPI.GET_ALL_PRODUCTS}/bycategory/home`).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }

  //function to get only all fashion product
  getFashionProduct(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`${ProductAPI.GET_ALL_PRODUCTS}/bycategory/fashion`).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }
  getToken(){
  return localStorage.getItem("userToken")
  }
  //add review
  addReview(review:IReview,productId): Observable<IReview> {
    return this._http.post<IReview>(`${ProductAPI.ADD_REVIEW}/${productId}/reviews`,review,{
      headers:{
        'Content-Type':'application/json',
        Authorization:`Bearer ${this.getToken()}`
      }
    }).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }
}
