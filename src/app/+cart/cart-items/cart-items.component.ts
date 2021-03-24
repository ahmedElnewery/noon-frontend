import { CartService } from 'src/app/+shared/services/cart.service';
import { Router } from '@angular/router';
import { IProduct } from './../../+shared/interfaces/IProduct';
import { ProductService } from './../../+shared/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {
  cartItems;
  error=""
  constructor(private cartService:CartService,private router:Router) {

  }

  ngOnInit(): void {
this.getcarts()
  }
  getcarts(){
    this.cartService.getAllCarts().subscribe(
      (cartItems)=>{this.cartItems = cartItems;
        console.log(this.cartItems)
      },
      (error)=>this.error =error
    )}
  navigateToDetails(){
    // this.router.navigate([`/productdetails/${this.productList[0]._id}`])
  }

}
