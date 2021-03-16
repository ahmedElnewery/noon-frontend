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
  addProduct(product):Observable<IProduct>{

    return this._http.post<IProduct>(ProductAPI.ADD_PRODUCT,
      {...product}
      ).pipe(
      catchError(err => { return throwError(err.message) })
    )
  }

}
