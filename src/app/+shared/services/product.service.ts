import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IProduct } from '../interfaces/product';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  _url: string = "";

  getProduct(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._url).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }

}
