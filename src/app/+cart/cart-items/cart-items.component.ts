import { CartService } from 'src/app/+shared/services/cart.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IProduct } from './../../+shared/interfaces/IProduct';
import { ProductService } from './../../+shared/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {
  cartItems:IProduct[];
  error=""
  prodId:string;
  constructor(private cartService:CartService,private router:Router,private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      if (params.get('prodId') != null) {
        this.prodId = params.get('.prodId');
      }
    })



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
  deleteCart(){

    this.cartService.deleteCart(this.prodId).subscribe(
      (data) => {
        console.log(data)
        this.error = ""
      },
      err=> this.error = "error"

    )
  }
}


