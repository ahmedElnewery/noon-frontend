import { Component, Input, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
@Input()productList
  // images = [
  //   { src: "../../../assets/Img/products/chothes/product-1.jpg" },
  //   { src: "../../../assets/Img/products/chothes/product-2.jpg" },
  //   { src: "../../../assets/Img/products/chothes/product-3.jpg" },
  //   { src: "../../../assets/Img/products/chothes/product-4.jpg" },
  //   { src: "../../../assets/Img/products/chothes/product-5.jpg" },

  // ]
  constructor() { }

  ngOnInit(): void {
    // this.initializeSlider()
  }

  ngAfterViewInit(){

  }
  initializeSlider() {
    $(document).ready(function () {

      $('.product-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
    })
  }
}
