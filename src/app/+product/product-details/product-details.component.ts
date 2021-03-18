import { IProduct } from './../../+shared/interfaces/IProduct';
import { ProductService } from './../../+shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: IProduct;
  loading: Boolean = false
  errorMessage = ""
  productID;
  constructor(private productServ: ProductService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getActivatedRoute()
    this.getProductById(this.productID)
  }

  getActivatedRoute() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id') != null) {
        console.log(params.get('id'))
        this.productID = params.get('id');

      }

    })
  }
  getProductById(id) {
    this.loading = true
    this.productServ.getProductByID(id).subscribe(
      data => {
        this.loading = false
        this.product = data
      },
      err => {
        this.errorMessage = err;
        this.loading = false
      }
    );
  }
}
