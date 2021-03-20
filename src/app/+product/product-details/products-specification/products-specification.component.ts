import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-specification',
  templateUrl: './products-specification.component.html',
  styleUrls: ['./products-specification.component.scss']
})
export class ProductsSpecificationComponent implements OnInit {
@Input ()currentProduct
  constructor() { }

  ngOnInit(): void {
  }

}
