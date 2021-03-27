import { CheckoutSignUpComponent } from './+product/+checkout/checkout-content/checkout-sign-up/checkout-sign-up.component';
import { ChekcoutShipAddressComponent } from './+product/+checkout/checkout-content/chekcout-ship-address/chekcout-ship-address.component';
import { CheckoutSignInComponent } from './+product/+checkout/checkout-content/checkout-sign-in/checkout-sign-in.component';
import { ProductDetailsComponent } from './+product/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './+product/+main-page/main-page.component';
import { SignInComponent } from './+auth/sign-in/sign-in.component';
import { SignUpComponent } from './+auth/sign-up/sign-up.component';
import { ByCategoryComponent } from './+filter/by-category/by-category.component';
import { FilterComponent } from './+filter/filter/filter.component';
//import { ProductCartComponent } from './+product/+main-page/product-cart/product-cart.component';
import { CheckoutComponent } from './+product/+checkout/checkout.component';
import { ChekcoutPaymentComponent } from './+product/+checkout/checkout-content/chekcout-payment/chekcout-payment.component';
import { ChekcoutOrdersComponent } from './+product/+checkout/checkout-content/chekcout-orders/chekcout-orders.component';
import { CartComponent } from './+cart/cart.component';

const routes: Routes = [
  { path: "productdetails/:id", component: ProductDetailsComponent },
  { path: "", component: MainPageComponent },
  {
    path: 'checkout',
    component: CheckoutComponent,
    children: [
      { path: 'sign-in', component: CheckoutSignInComponent },
      { path: 'ship-address', component: ChekcoutShipAddressComponent },
      { path: 'payment', component: ChekcoutPaymentComponent },
      { path: 'orders-list', component: ChekcoutOrdersComponent },
      { path: 'sign-up', component: CheckoutSignUpComponent },
    ],
  },
  { path: "signin", component: SignInComponent },
  { path: "signup", component: SignUpComponent },
  { path: 'allcategory/:cateName', component: ByCategoryComponent },
  { path: 'filter/:subcateName', component: FilterComponent },
  { path: 'product_cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
