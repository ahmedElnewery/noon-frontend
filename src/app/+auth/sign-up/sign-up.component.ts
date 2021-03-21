import { UserService } from './../../+shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/+shared/classes/user-data';
import { SignInComponent } from 'src/app/+auth/sign-in/sign-in.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private userServ: UserService) { }

  userModel = new UserData('', '', '', '');
  signUp(userModel: UserData) {
    if (userModel.firstName == '' || userModel.lastName == '' || userModel.email == '' || userModel.password == '') {
      alert("please fiil all inputs");
      return;
    }
    // temporary
    console.warn(this.userServ.signUp(userModel));

    alert("the sign up process successful");
  }

  ngOnInit(): void {
  }

}
