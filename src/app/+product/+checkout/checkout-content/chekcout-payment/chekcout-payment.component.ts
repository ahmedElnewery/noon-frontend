import { Order } from './../../../../+shared/classes/order';
import { OrderService } from './../../../../+shared/services/order.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IClient } from './../../../../+shared/interfaces/IOrder';
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/+shared/services/cart.service';

@Component({
  selector: 'app-chekcout-payment',
  templateUrl: './chekcout-payment.component.html',
  styleUrls: ['./chekcout-payment.component.scss']
})
export class ChekcoutPaymentComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private orderServ: OrderService, private cartService: CartService) { }

  //order:IOrder = {products:[],user:{userId}, clientInfo: {} };

  order = new Order;
  clientInfo: IClient;
  temClientInfo: IClient;
  leaveAtHome: boolean = false;
  getItTogether: boolean = false;
  totalPrice: number = parseInt(localStorage.getItem('totalPrice'));
  priceWithVAT: number;

  cartItems: any;
  @Input() carItem
  error = ""
  prodId: string;


  //function to pic if client choose leaveAtHome or getItTogether
  checked(option: number) {

    if (option == 1) {
      let op1 = (<HTMLInputElement>document.getElementById('option1'));
      if (op1.style.color == 'white') {
        op1.style.color = 'blue';
        this.leaveAtHome = true;

      }
      else {
        op1.style.color = 'white';
        this.leaveAtHome = false;
      }
      return this.leaveAtHome;

    }
    else if (option == 2) {
      let op2 = (<HTMLInputElement>document.getElementById('option2'));
      if (op2.style.color == 'white') {
        op2.style.color = 'blue';
        this.getItTogether = true;

      }
      else {
        op2.style.color = 'white';
        this.getItTogether = false;
      }
      return this.getItTogether;
    }
  }


  ngOnInit(): void {
    // to load your order component
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      if (params.get('prodId') != null) {
        this.prodId = params.get('.prodId');
      }
    })
    this.getcarts()


    // load client info from localStorage
    this.temClientInfo = JSON.parse(localStorage.getItem('clientInfo'));
    this.clientInfo = { ...this.temClientInfo };
    //console.warn(this.clientInfo);
    this.order.clientInfo = this.clientInfo;
    console.warn(this.order);

  }

  ngAfterViewInit(): void {
    //calculate VAT
    this.priceWithVAT = this.totalPrice + this.totalPrice * 0.1;
    console.warn(this.priceWithVAT);

  }

  // confirm order
  addOrder() {
    this.order.leaveAtHome = this.leaveAtHome;
    this.order.getItTogether = this.getItTogether;
    this.order.totalPrice = parseInt(localStorage.getItem('totalPrice'));

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
