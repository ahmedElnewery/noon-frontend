import { Order } from './../../../../+shared/classes/order';
import { OrderService } from './../../../../+shared/services/order.service';
import { Router } from '@angular/router';
import { IClient, IOrder } from './../../../../+shared/interfaces/IOrder';
import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/+shared/interfaces/IUser';
import { CartService } from 'src/app/+shared/services/cart.service';

@Component({
  selector: 'app-chekcout-payment',
  templateUrl: './chekcout-payment.component.html',
  styleUrls: ['./chekcout-payment.component.scss']
})
export class ChekcoutPaymentComponent implements OnInit {

  constructor(private router: Router, private orderServ: OrderService, private cartService: CartService) { }

  //order:IOrder = {products:[],user:{userId}, clientInfo: {} };

  order = new Order;
  clientInfo: IClient;
  temClientInfo: IClient;
  leaveAtHome: boolean = false;
  getItTogether: boolean = false;
  totalPrice: number = 1000;
  priceWithVAT: number;

  cartItems: any;
  @Input() carItem
  error = ""
  prodId: string;


  checked(option: number) {

    if (option == 1) {
      (<HTMLInputElement>document.getElementById('option1')).style.color = 'blue';
      this.leaveAtHome = true;
      return this.leaveAtHome;

    }
    else if (option == 2) {
      (<HTMLInputElement>document.getElementById('option2')).style.color = 'blue';
      this.getItTogether = true;
      return this.getItTogether;
    }
  }


  ngOnInit(): void {
    this.temClientInfo = JSON.parse(localStorage.getItem('clientInfo'));
    this.clientInfo = { ...this.temClientInfo };
    //console.warn(this.clientInfo);

    this.priceWithVAT = this.totalPrice + this.totalPrice * 0.1;
    console.warn(this.priceWithVAT);

    this.order.clientInfo = this.clientInfo;
    console.warn(this.order);

  }

  addOrder() {
    this.order.leaveAtHome = this.leaveAtHome;
    this.order.getItTogether = this.getItTogether;
    this.order.totalPrice = this.totalPrice;

    this.orderServ.addOrder(this.order).subscribe(
      data => {
        this.order = data;
        console.warn(this.order);
      },
      err => { throw err }
    );
    // console.warn(this.order);
    console.warn('order added');

    this.router.navigate(['checkout/orders-list']);

  }

  getcarts() {
    this.cartService.getAllCarts().subscribe(
      (cartItems) => {
        this.cartItems = cartItems;
        console.log(this.cartItems)
      },
      (error) => this.error = error
    )
  }


}
