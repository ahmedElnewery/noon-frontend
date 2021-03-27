import { Order } from './../../../../+shared/classes/order';
import { OrderService } from './../../../../+shared/services/order.service';
import { Router } from '@angular/router';
import { IClient, IOrder } from './../../../../+shared/interfaces/IOrder';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/+shared/interfaces/IUser';

@Component({
  selector: 'app-chekcout-payment',
  templateUrl: './chekcout-payment.component.html',
  styleUrls: ['./chekcout-payment.component.scss']
})
export class ChekcoutPaymentComponent implements OnInit {

  constructor(private router: Router, private orderServ: OrderService) { }

  //order:IOrder = {products:[],user:{userId}, clientInfo: {} };
  //order = new Order();

  clientInfo: IClient;
  temClientInfo: IClient;

  // user: IUser;
  // product: IProduct[];
  // deleviryOption: IDeliveryOption;
  // paymentMethod: string;
  // paymentStatus: string;
  // totalPrice: string;
  // isDelivered: boolean;

  order = new Order;

  checked(option: number) {

    if (option == 1) {
      (<HTMLInputElement>document.getElementById('option1')).style.color = 'blue';
      console.warn('option 1 checked');
      return true;
    }
    else if (option == 2) {
      (<HTMLInputElement>document.getElementById('option2')).style.color = 'blue';
      console.warn('option 2 checked');
      return true;
    }
  }

  ngOnInit(): void {
    this.temClientInfo = JSON.parse(localStorage.getItem('clientInfo'));
    this.clientInfo = { ...this.temClientInfo };
    console.warn(this.clientInfo);

    this.order.clientInfo = this.clientInfo;
    console.warn(this.order);

    //console.warn(this.temClientInfo);
    // const city = this.temClientInfo['city'];
    // const address = this.temClientInfo['address'];
    // const mobile = this.temClientInfo['mobile'];
    // const firstName = this.temClientInfo['firstName'];
    // const lastName = this.temClientInfo['lastName'];


    // this.deleviryOption = { leaveAtHome: true, getItTogether: true };
    // this.paymentMethod = 'cash';
    // this.paymentStatus = 'in way';
    // this.totalPrice = '1000';
    // this.isDelivered = false;

    // this.order.products = this.product;
    // this.order.user = this.user;
    // this.order.clientInfo = this.clientInfo;
    // this.order.paymentMethod = this.paymentMethod;
    // this.order.paymentStatus = this.paymentStatus;
    // this.order.deliveryOptions = this.deleviryOption;
    // this.order.totalPrice = this.totalPrice;
    // this.order.isDelivered = this.isDelivered;
    // console.warn(this.order);
  }

  addOrder() {

    this.orderServ.addOrder(this.order).subscribe(
      data => {
        this.order = data;
        console.warn(this.order);
      },
      err => { throw err }
    );
    // console.warn(this.order);
    // console.warn('order added');

    this.router.navigate(['checkout/orders-list']);

  }

}
