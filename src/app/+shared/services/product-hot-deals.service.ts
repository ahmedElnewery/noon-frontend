import { IProduct } from './../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductHotDealsService {

  constructor(private _http: HttpClient) { }

  // _url will change to get products by category
  _url: string = "http://localhost:8000/api/products";
  getProduct(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._url).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }
}
