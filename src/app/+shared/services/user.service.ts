import { IUser } from './../interfaces/IUser';
import { Observable, throwError } from 'rxjs';
import { UserData } from './../classes/user-data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }
  _url = "http://localhost:8000/api/users/register";
  _url2 = "http://localhost:8000/api/users/authenticate";

  signUp(user: UserData) {
    this._http.post<UserData>(this._url, user).subscribe(
      data => console.warn(data),
      err => throwError(err)
    );
  }

  signIn(user: UserData) {
    return this._http.post<UserData>(this._url2, user)

  }
}
