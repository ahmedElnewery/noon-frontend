import { AddProductComponent } from './+admin/add-product/add-product.component';
import { ProductDetailsComponent } from './+product/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './+product/+main-page/main-page.component';
import { SignInComponent } from './+auth/sign-in/sign-in.component';
import { SignUpComponent } from './+auth/sign-up/sign-up.component';

const routes: Routes = [
  { path: "productdetails/:id", component: ProductDetailsComponent },
  { path: "admin", component: AddProductComponent },
  { path: "", component: MainPageComponent },
  { path: "signin", component: SignInComponent },
  { path: "signup", component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
