import { IOrder } from './../interfaces/IOrder';
import { OrderAPI } from './../../../@core/APIs/orderAPI';
import { throwError, Observable } from 'rxjs';
import { Order } from './../classes/order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _http: HttpClient) { }

  getToken() {
    return localStorage.getItem("userToken")
  }

  //function to add new order
  addOrder(order: Order): Observable<Order> {
    return this._http.post<Order>(OrderAPI.ADD_ORDER, { ...order }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.getToken()}`
      }
    }).pipe(
      catchError(err => { return throwError(err.message); })
    )
  };

  //function to get all orders
  getAllOrders(): Observable<IOrder[]> {
    return this._http.get<IOrder[]>(OrderAPI.GET_ALL_ORDER).pipe(
      catchError(err => { return throwError(err.message); })
    )
  };

  //function to remove specific order
  removeOrder(orderId) {
    this._http.delete(`${OrderAPI.REMOVE_ORDER}/${orderId}`).pipe(
      catchError(err => { return throwError(err.message); })
    )
  };
}
