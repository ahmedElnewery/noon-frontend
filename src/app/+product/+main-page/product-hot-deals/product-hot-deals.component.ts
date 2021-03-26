import { IProduct } from '../../../+shared/interfaces/IProduct';
import { ProductService } from '../../../+shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-product-hot-deals',
  templateUrl: './product-hot-deals.component.html',
  styleUrls: ['./product-hot-deals.component.scss']
})
export class ProductHotDealsComponent implements OnInit {

  constructor(private productServ: ProductService, private activeRoute: ActivatedRoute) { }

  hotDealsProductList: IProduct[] = [];
  errorMessage: string = '';
loading:boolean=false;
slickFinish:boolean=false
  ngOnInit(): void {
    this.loading=true
    this.productServ.getElectronicProduct().subscribe(
      data => {
        this.hotDealsProductList = data;
        this.initSlick()
        this.loading=false
      },
      err => this.errorMessage = err
    );

  }
  initSlick(){
      $(document).ready(function () {
      $('.electronic-slider').slick({
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

  }
}
