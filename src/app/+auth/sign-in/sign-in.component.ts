import { IUser } from './../../+shared/interfaces/IUser';
import { throwError } from 'rxjs';
import { UserService } from './../../+shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/+shared/classes/user-data';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  formGroup: FormGroup;
  constructor(private userSer: UserService) { }


  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })

  }

  user: IUser;

  signIn() {
    //alert("still working on it");
    if (this.formGroup.valid) {
      this.userSer.signIn(this.formGroup.value).subscribe(
        data => {
          this.user = data;
          console.warn(data);
          alert("sign in successfully");
          console.warn(this.user.token);
          localStorage.setItem('userToken', this.user.token);
        },
        err => {
          console.warn(err.message);
          alert('email or password is incorrect');
          return;
        }
      );
    }
    else
      alert('please fill email and password to sign in');

  }

}
