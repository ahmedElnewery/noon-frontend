import { Color, Size } from './../../../../+shared/enums/fashion';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.scss']
})
export class CartFormComponent implements OnInit {
@Input() inStockArray;
allColor=Color;
allSizes=Size
  constructor() { }

  ngOnInit(): void {
  }

}
