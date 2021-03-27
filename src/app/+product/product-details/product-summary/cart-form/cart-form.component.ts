import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from 'src/app/+shared/services/cart.service';
import { Color, Size } from './../../../../+shared/enums/fashion';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

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
  product;
  constructor(private cartService: CartService, private activatedRoute: ActivatedRoute,private fb:FormBuilder) {


  }

  cartForm = this.fb.group({
    qty: [0],

  })
  get qty() {
    return this.cartForm.get('qty');
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentProduct']) {
      this.qty.setValue(1)
    }
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id') != null) {
        this.id = params.get('id');
      }
    })

  }
  changeQty(e) {
    this.qty.setValue(e.target.value, {
      onlySelf: true
    })
  }
  addToCart() {
    this.cartService.addToCart(this.id,this.qty.value).subscribe(
      (data) => {
        console.log('qty :'+this.qty.value)

        console.log(data)
        this.error = ""
      },
      err => this.error = "error"

    )
  }
}


