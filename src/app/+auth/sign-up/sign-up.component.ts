import { UserService } from './../../+shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/+shared/classes/user-data';

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
    alert("the sign up process successful");
  }

  ngOnInit(): void {
  }

}
