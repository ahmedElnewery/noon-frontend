import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-cart",
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }
  totalPrice: number = 0;

  ngOnInit(): void {
    localStorage.setItem('totalPrice', this.totalPrice.toString())
  }

  ngAfterViewChecked(): void {
    this.totalPrice = parseInt(localStorage.getItem('totalPrice'));
  }

}
