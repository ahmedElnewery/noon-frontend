import { ProductCartComponent } from './+product/product-cart/product-cart/product-cart.component';
import { ProductDetailsComponent } from './+product/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"productdetails",component:ProductDetailsComponent},
  {path:"",component:ProductCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
