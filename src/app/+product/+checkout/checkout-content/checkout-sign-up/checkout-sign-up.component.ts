import { Router } from '@angular/router';
import { UserService } from '../../../../+shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/+shared/classes/user-data';

@Component({
  selector: 'app-checkout-sign-up',
  templateUrl: './checkout-sign-up.component.html',
  styleUrls: ['./checkout-sign-up.component.scss']
})
export class CheckoutSignUpComponent implements OnInit {

  constructor(private userServ: UserService, private router: Router) { }

  userModel = new UserData('', '', '', '');
  signUp(userModel: UserData) {
    if (userModel.firstName == '' || userModel.lastName == '' || userModel.email == '' || userModel.password == '') {
      alert("please fiil all inputs");
      return;
    }
    // temporary
    console.warn(this.userServ.signUp(userModel));

    this.router.navigate(['checkout/sign-in']);
  }

  ngOnInit(): void {
  }

}
