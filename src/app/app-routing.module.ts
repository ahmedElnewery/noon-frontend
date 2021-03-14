import { AddProductComponent } from './+admin/add-product/add-product.component';
import { ProductDetailsComponent } from './+product/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './+product/+main-page/main-page.component';

const routes: Routes = [
  { path: "productdetails", component: ProductDetailsComponent },
  { path: "admin", component: AddProductComponent },

  { path: "", component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
