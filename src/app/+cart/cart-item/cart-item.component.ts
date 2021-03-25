import { CartService } from './../../+shared/services/cart.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input()carItem
  currentItem ;
  error="";
  constructor(private router:Router ,private fb:FormBuilder,private cartService:CartService) {
   }
   ngOnChanges(changes: SimpleChanges) {
    if (changes['carItem']) {
      this.currentItem = this.carItem;
      this.qty.setValue(this.currentItem.quantity)
    }

}

  ngOnInit(): void {

  }

  cartForm = this.fb.group({
  qty: [0]

  })

  navigateToDetails(){

    this.router.navigate([`/productdetails/${this.currentItem.productId._id}`])
  }
  get qty() {
  return this.cartForm.get('qty');
}

changeQty(formControl) {
  this.addToCart( formControl.value)
}

  addToCart(qty) {
    this.cartService.addToCart(this.currentItem.productId._id,qty).subscribe(
      (data) => {
        console.log('qty :'+this.qty.value)

        console.log(data)
        this.error = ""
      },
      err => this.error = "error"

    )
  }
}



