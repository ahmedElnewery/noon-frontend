import { IProduct } from '../../../+shared/interfaces/IProduct';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/+shared/services/product.service';

@Component({
  selector: 'app-product-fashion',
  templateUrl: './product-fashion.component.html',
  styleUrls: ['./product-fashion.component.scss']
})
export class ProductFashionComponent implements OnInit {

  constructor(private productServ: ProductService) { }

  fashionProductList: IProduct[] = [];
  errorMessage: string = '';

  ngOnInit(): void {
    this.productServ.getFashionProduct().subscribe(
      data => this.fashionProductList = data,
      err => this.errorMessage = err
    );

  }
}
