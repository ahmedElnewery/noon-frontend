import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {

  categoryImg = [
    { src: "../../../assets/Img/test/en_category-01.png" ,category:"menWear"},
    { src: "../../../assets/Img/test/en_category-02.png" ,category:"womenWear"},
    { src: "../../../assets/Img/test/en_mb-category-10.png" ,category:"kidWear"},
    { src: "../../../assets/Img/test/en_category-04.png" ,category:"kitchen"},
    { src: "../../../assets/Img/test/en_mb-category-01.png" ,category:"mobiles"},
    { src: "../../../assets/Img/test/en_mb-category-02.png" ,category:"labtops"},
    { src: "../../../assets/Img/test/en_mb-category-03.png" ,category:"tv"},
    { src: "../../../assets/Img/test/en_mb-category-05.png" ,category:"kitchen"},
    { src: "../../../assets/Img/test/en_mb-category-07.png" ,category:"makeup"},
    { src: "../../../assets/Img/test/en_mb-category-09.png" ,category:"hairCare"},
  ]
  constructor(private router:Router) { }
  GoToThisCategory(item){
    this.router.navigate(['/filter', item.category])
  }
  ngOnInit(): void {
  }

}
