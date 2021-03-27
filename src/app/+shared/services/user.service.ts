import { UserAPI } from './../../../@core/APIs/usersAPI';
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

  signUp(user: UserData) {
    this._http.post<UserData>(UserAPI.SIGN_UP, user).subscribe(
      data => { console.warn(data); document.getElementById('signUpModal').click(); },
      err => throwError(err)
    );
  }

  signIn(user: UserData) {
    return this._http.post<UserData>(UserAPI.SGIN_IN, user)

  }
}
