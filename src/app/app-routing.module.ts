import { AddProductComponent } from './+admin/add-product/add-product.component';
import { ProductDetailsComponent } from './+product/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './+product/+main-page/main-page.component';
import { SignInComponent } from './+auth/sign-in/sign-in.component';
import { SignUpComponent } from './+auth/sign-up/sign-up.component';
import { ByCategoryComponent } from './+filter/by-category/by-category.component';
import { FilterComponent } from './+filter/filter/filter.component';
import { ProductCartComponent } from './+product/+main-page/product-cart/product-cart.component';
import { CartComponent } from './+cart/cart.component';
import { NotFoundComponent } from './+filter/not-found/not-found.component';

const routes: Routes = [
  { path: "productdetails/:id", component: ProductDetailsComponent },
  { path: "admin", component: AddProductComponent },
  { path: "", component: MainPageComponent },
  { path: "signin", component: SignInComponent },
  { path: "signup", component: SignUpComponent },
  {path:'allcategory/:cateName',component:ByCategoryComponent},
  {path:'filter/:subcateName',component:FilterComponent},
  {path:'product_cart',component:CartComponent},
  {path:'not_found',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
