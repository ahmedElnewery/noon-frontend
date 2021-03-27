import { CartService } from 'src/app/+shared/services/cart.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
//import { IProduct } from './../../+shared/interfaces/IProduct';
import { ProductService } from './../../+shared/services/product.service';
import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {
  cartItems: any;
  @Input() carItem
  error = ""
  prodId: string;
  totalPrice: number = 0;
  item:any;

  constructor(private cartService: CartService, private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {

  }



  cartForm = this.fb.group({
    qty: [0]

  })
  get qty() {
    return this.cartForm.get('qty');
  }

  changeQty(formControl, item) {
    this.addToCart(formControl.value, item)
  }

  addToCart(qty, item) {
    this.cartService.addToCart(item.productId._id, qty).subscribe(
      (data) => {
        console.log('qty :' + this.qty.value)

        console.log(data)
        this.error = ""
        this.totalPrice += item.productId.price * qty;
        localStorage.setItem('totalPrice', this.totalPrice.toString())
        console.warn(this.totalPrice);

      },
      err => this.error = "error"

    )
  }


  deletCart( item) {
    this.cartService.deleteCart(item).subscribe(
      (data) => {
        console.log(data)

        console.log(data)
        this.error = ""
       

      },
      err => this.error = "error"

    )
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['carItem']) {
      // this.currentItem = this.carItem;
      // this.qty.setValue(this.currentItem.quantity)
    }
  }
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      if (params.get('prodId') != null) {
        this.prodId = params.get('.prodId');
      }
    })


    this.getcarts()
    //console.log(this.getcarts())
  }
  getcarts() {
    this.cartService.getAllCarts().subscribe(
      (cartItems) => {
        this.cartItems = cartItems;
        console.log(this.cartItems)
      },
      (error) => this.error = error
    )
  }



  navigateToDetails(item) {

    this.router.navigate([`/productdetails/${item._id}`])
  }
}


