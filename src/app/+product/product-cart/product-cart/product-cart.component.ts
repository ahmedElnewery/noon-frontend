import { IProduct } from './../../../+shared/interfaces/product';
import { ProductService } from './../../../+shared/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {

  constructor(private productServ: ProductService,) { }

  productList: IProduct[] = [];
  errorMessage: string = '';

  ngOnInit(): void {
    this.productServ.getProduct().subscribe(
      data => this.productList = data,
      err => this.errorMessage = err
    );

    //this.activeRoute.paramMap.s
  }

}
