import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-design',
  templateUrl: './product-card-design.component.html',
  styleUrls: ['./product-card-design.component.scss']
})
export class ProductCardDesignComponent implements OnInit {
@Input ()product
  constructor() { }

  ngOnInit(): void {
  }

}
