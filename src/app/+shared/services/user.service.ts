import { UserData } from './../classes/user-data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }
  _url = "";

  signUp(user: UserData) {
    this._http.post<UserData>(this._url, user);
  }

}
