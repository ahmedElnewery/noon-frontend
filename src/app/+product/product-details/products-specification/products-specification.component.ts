import { ProductService } from 'src/app/+shared/services/product.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-specification',
  templateUrl: './products-specification.component.html',
  styleUrls: ['./products-specification.component.scss']
})
export class ProductsSpecificationComponent implements OnInit {
@Input ()currentProduct
  constructor(private fb: FormBuilder,private   productService: ProductService) { }
  addReviewFrom =this.fb.group({
    rating: [0],
    comment: [""]
  })
  ngOnInit(): void {
  }
  addReview(){
    console.log(this.addReviewFrom.value)
    this.productService.addReview(this.addReviewFrom.value,this.currentProduct._id).subscribe((data) => console.log(data), err => console.log(err.message))

  }

}
