import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/+shared/interfaces/product';
import { ProductService } from 'src/app/+shared/services/product.service';
declare var $: any;

@Component({
  selector: 'app-related-product',
  templateUrl: './related-product.component.html',
  styleUrls: ['./related-product.component.scss']
})
export class RelatedProductComponent implements OnInit {
  constructor(private productServ: ProductService) { }

  productList: IProduct[] = [];
  errorMessage: string = '';

  ngOnInit(): void {
    this.productServ.getProduct().subscribe(
      data => {
        this.productList = data
        console.log(data)
      },
      err => this.errorMessage = err
    );
    this.initializeSlider()
  }
  initializeSlider() {
    $(document).ready(function () {
      $('.related-product').slick({
        dots: false,
        arrows:true,
        slidesToShow: 3,
        slidesToScroll: 3,
        focusOnSelect: true,
        infinite:true
      });
    })
  }
}
