import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements OnInit {
  images = [
    { src: "../../../assets/Img/products/chothes/product-1.jpg" },
    { src: "../../../assets/Img/products/chothes/product-2.jpg" },
    { src: "../../../assets/Img/products/chothes/product-3.jpg" },
    { src: "../../../assets/Img/products/chothes/product-4.jpg" },


  ]
  currentImg= "../../../assets/Img/products/chothes/product-5.jpg"
  constructor() { }

  ngOnInit(): void {
  }
  selectImg(img){
    this.currentImg= img.src
  }

}
