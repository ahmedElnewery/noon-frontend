import { IProduct } from '../../../+shared/interfaces/IProduct';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/+shared/services/product.service';
declare var $: any;

@Component({
  selector: 'app-product-tech-devices',
  templateUrl: './product-tech-devices.component.html',
  styleUrls: ['./product-tech-devices.component.scss']
})
export class ProductTechDevicesComponent implements OnInit {

  constructor(private productServ: ProductService) { }

  techDevicesProductList: IProduct[] = [];
  errorMessage: string = '';
  loading:boolean =false

  ngOnInit(): void {
    this.loading =true

    this.productServ.getHomeProduct().subscribe(
      data => {
        this.techDevicesProductList = data
        $(document).ready(function () {

          $('.product-slider').slick({
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 7,
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

    setTimeout(() => {
      console.warn(this.techDevicesProductList);
    }, 5000)
  }

}
