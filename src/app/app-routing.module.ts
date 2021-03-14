import { ProductDetailsComponent } from './+product/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './+product/+main-page/main-page.component';

const routes: Routes = [
  { path: "productdetails", component: ProductDetailsComponent },
  { path: "", component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
