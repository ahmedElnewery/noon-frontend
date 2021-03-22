import { ProductService } from 'src/app/+shared/services/product.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-products-specification',
  templateUrl: './products-specification.component.html',
  styleUrls: ['./products-specification.component.scss']
})
export class ProductsSpecificationComponent implements OnInit {
  @Input() currentProduct
  error:string="";
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;
  constructor(private fb: FormBuilder, private productService: ProductService) { }
  addReviewFrom = this.fb.group({
    comment: [""]
  })
  ngOnInit(): void {

  }

  addReview() {
   const review = {...this.addReviewFrom.value,rating:this.selectedValue}

    this.productService.addReview(review, this.currentProduct._id).subscribe(
      (data) => {
       this.currentProduct.reviews = [...this.currentProduct.reviews,data]
       this.error =""
      },
     err => this.error ="you have already review this product"

  )}
  countStar(star) {
    this.selectedValue = star;
  }

}
