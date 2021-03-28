import { UserAPI } from './../../../@core/APIs/usersAPI';
import { IUser } from './../interfaces/IUser';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { UserData } from './../classes/user-data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user;
  private loginListner = new Subject<boolean>()
  constructor(private _http: HttpClient) { }
  getLoginListner() {
    return this.loginListner.asObservable()
  }

  signUp(user: UserData) {
    this._http.post<UserData>(UserAPI.SIGN_UP, user).subscribe(
      data => { console.warn(data); document.getElementById('signUpModal').click(); },
      err => throwError(err)
    );
  }

  signIn(user: UserData) {
    this._http.post<UserData>(UserAPI.SGIN_IN, user).subscribe(
      data => {
        this.user = data
        console.warn(data);
        //alert("sign in successfully");
        this.loginListner.next(true)
        localStorage.setItem('userToken', this.user.token);
      },
      err => {
        console.warn(err.message);
        alert('email or password is incorrect');
      }
    );

  }
  logOut() {
    console.log("deleted")
    localStorage.removeItem("userToken");
    this.loginListner.next(false)
  }

  signInCheckout(user: UserData) {
    return this._http.post<UserData>(UserAPI.SGIN_IN, user)
  }
}

