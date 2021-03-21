import { IProduct } from '../../../+shared/interfaces/IProduct';
import { ProductService } from '../../../+shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-hot-deals',
  templateUrl: './product-hot-deals.component.html',
  styleUrls: ['./product-hot-deals.component.scss']
})
export class ProductHotDealsComponent implements OnInit {

  constructor(private productServ: ProductService, private activeRoute: ActivatedRoute) { }

  hotDealsProductList: IProduct[] = [];
  errorMessage: string = '';

  ngOnInit(): void {
    this.productServ.getElectronicProduct().subscribe(
      data => this.hotDealsProductList = data,
      err => this.errorMessage = err
    );

  }
}
