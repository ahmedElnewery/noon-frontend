import { IUser } from '../../../../+shared/interfaces/IUser';
import { throwError } from 'rxjs';
import { UserService } from '../../../../+shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/+shared/classes/user-data';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SignUpComponent } from 'src/app/+auth/sign-up/sign-up.component';

@Component({
  selector: 'app-checkout-sign-in',
  templateUrl: './checkout-sign-in.component.html',
  styleUrls: ['./checkout-sign-in.component.scss']
})
export class CheckoutSignInComponent implements OnInit {

  formGroup: FormGroup;
  constructor(private userSer: UserService, private router: Router, private activeRoute: ActivatedRoute) { }

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
      this.userSer.signInCheckout(this.formGroup.value).subscribe(
        data => {
          this.user = data;
          console.warn(data);
          //alert("sign in successfully");
          console.warn(this.user.token);
          localStorage.setItem('userToken', this.user.token);
          this.router.navigate(['checkout/ship-address']);
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

  goToSignUp() {
    this.router.navigate(['checkout/sign-up']);
  }

  // showSection() {
  //   this.router.navigate(['sign-up'], {
  //     relativeTo: this.activeRoute,
  //   });
  // }

}
