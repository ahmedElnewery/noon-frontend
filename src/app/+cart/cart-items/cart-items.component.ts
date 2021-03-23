import { IProduct } from './../../+shared/interfaces/IProduct';
import { ProductService } from './../../+shared/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {
  productList:IProduct[];
  error=""
  constructor(private productSevice:ProductService) {

  }

  ngOnInit(): void {
    this.productSevice.getProduct().subscribe(
      (products)=>this.productList = products),
      (error)=>this.error =error
  }

}
