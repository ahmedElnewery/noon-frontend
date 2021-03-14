import { ProductDetailsComponent } from './+product/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './+product/+main-page/main-page.component';
import { SignInComponent } from './+auth/sign-in/sign-in.component';
import { SignUpComponent } from './+auth/sign-up/sign-up.component';

const routes: Routes = [
  { path: "productdetails", component: ProductDetailsComponent },
  { path: "", component: MainPageComponent },
  { path: "sign-in", component: SignInComponent },
  { path: "sign-up", component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
