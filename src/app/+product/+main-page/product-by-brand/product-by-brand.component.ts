import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-by-brand',
  templateUrl: './product-by-brand.component.html',
  styleUrls: ['./product-by-brand.component.scss']
})
export class ProductByBrandComponent implements OnInit {

  brandImg = [
    { src: "../../../../assets/Img/test/en_logo-01.png" },
    { src: "../../../../assets/Img/test/en_logo-02.png" },
    { src: "../../../../assets/Img/test/en_logo-03.png" },
    { src: "../../../../assets/Img/test/en_logo-04.png" },
    { src: "../../../../assets/Img/test/en_logo-05.png" },
    { src: "../../../../assets/Img/test/en_logo-06.png" },
    { src: "../../../../assets/Img/test/en_logo-07.png" },
    { src: "../../../../assets/Img/test/en_logo-08.png" },
    { src: "../../../../assets/Img/test/en_logo-09.png" },
    { src: "../../../../assets/Img/test/en_logo-10.png" },
    { src: "../../../../assets/Img/test/en_logo-11.png" },
    { src: "../../../../assets/Img/test/en_logo-12.png" },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
