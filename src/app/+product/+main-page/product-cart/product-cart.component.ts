import { IProduct } from '../../../+shared/interfaces/IProduct';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/+shared/services/cart.service';


@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {

  constructor(private cartService:CartService) { }
id="60545e33b09d6330209d8be6";
  productList:any

  ngOnInit(): void {
  //  this.cartService.addToCart(this.id).subscribe(

  //   (data)=>{this.productList=data;
  //       console.log(data+"data data");

  //    },(err)=>{
  //      console.log(err);
  //    }

  //  );
  //  console.log(this.productList+"productlist");
  }



}
