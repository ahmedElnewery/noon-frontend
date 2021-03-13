import { Component, OnInit, SimpleChange } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  images=[
    {src:"../../../assets/Img/products/chothes/product-1.jpg"},
    {src:"../../../assets/Img/products/chothes/product-2.jpg"},
    {src:"../../../assets/Img/products/chothes/product-3.jpg"},
    {src:"../../../assets/Img/products/chothes/product-4.jpg"},
    {src:"../../../assets/Img/products/chothes/product-5.jpg"},

  ]
  constructor() { }

  ngOnInit(): void {
    this.initializeSlider()

  }

  initializeSlider(){
    $(document).ready(function () {
    $('.product-slider-single').slick({
      infinite: true,
      autoplay: true,
      dots: false,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.product-slider-single-nav'
    });
    $('.product-slider-single-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      asNavFor: '.product-slider-single'
    });
  })
  }
}
