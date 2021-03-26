import { IProduct } from '../../../+shared/interfaces/IProduct';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/+shared/services/product.service';
declare var $: any;

@Component({
  selector: 'app-product-fashion',
  templateUrl: './product-fashion.component.html',
  styleUrls: ['./product-fashion.component.scss']
})
export class ProductFashionComponent implements OnInit {

  constructor(private productServ: ProductService) { }

  fashionProductList: IProduct[] = [];
  errorMessage: string = '';
  loading:boolean =false

  ngOnInit(): void {
    this.loading =true
    this.productServ.getFashionProduct().subscribe(
      data => {
        this.fashionProductList = data;
        $(document).ready(function () {

          $('.fashion-slider').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 5,
                  infinite: true,
                }
              },
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 5,
                  infinite: true,
                }
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  infinite: true,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,

                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,

                }
              },
              {
                breakpoint: 320,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1                }
              }
            ]
          });
        })
        this.loading =false
      },
      err => this.errorMessage = err
    );

  }
}
