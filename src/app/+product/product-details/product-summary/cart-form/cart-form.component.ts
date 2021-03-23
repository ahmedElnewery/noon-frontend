import { ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from 'src/app/+shared/services/cart.service';
import { Color, Size } from './../../../../+shared/enums/fashion';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.scss']
})
export class CartFormComponent implements OnInit {
  @Input() countInStock;
  @Input() currentProduct
  allColor = Color;
  allSizes = Size;
  error: string = "";
  id: any;
  constructor(private cartService: CartService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id') != null) {
        this.id = params.get('id');
      }
    })
  }
  addToCart() {
    this.cartService.addToCart(this.id).subscribe(
      (data) => {
        console.log(data)
        this.error = ""
      },
      err => this.error = "error"

    )
  }
}


