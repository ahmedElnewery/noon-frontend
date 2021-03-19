import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {

  categoryImg = [
    { src: "../../../assets/Img/test/en_category-01.png" },
    { src: "../../../assets/Img/test/en_category-02.png" },
    { src: "../../../assets/Img/test/en_mb-category-10.png" },
    { src: "../../../assets/Img/test/en_category-04.png" },
    { src: "../../../assets/Img/test/en_mb-category-01.png" },
    { src: "../../../assets/Img/test/en_mb-category-02.png" },
    { src: "../../../assets/Img/test/en_mb-category-03.png" },
    { src: "../../../assets/Img/test/en_mb-category-05.png" },
    { src: "../../../assets/Img/test/en_mb-category-07.png" },
    { src: "../../../assets/Img/test/en_mb-category-09.png" },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
