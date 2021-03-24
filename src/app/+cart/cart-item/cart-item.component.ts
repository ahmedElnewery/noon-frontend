import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input()carItem
  currentItem ;
  constructor(private router:Router) {
    this.currentItem =this.carItem
   }

  ngOnInit(): void {
  }
  navigateToDetails(){
    this.router.navigate([`/productdetails/${this.currentItem.productId._id}`])
  }
}
