import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/+shared/interfaces/IProduct';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() productList: IProduct[] = [];
  constructor() { }

  ngOnInit(): void {
    console.warn(this.productList);

  }

}
