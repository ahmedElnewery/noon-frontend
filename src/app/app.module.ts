import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';


import { ProductDetailsComponent } from './+product/product-details/product-details.component';
import { ProductCartComponent } from './+product/product-cart/product-cart/product-cart.component';
import { SliderComponent } from './shared-UI/slider/slider.component';
import { RelatedProductComponent } from './+product/related-product/related-product.component';


@NgModule({
  declarations: [
    AppComponent,
      TestComponent,
      ProductCartComponent,
      ProductDetailsComponent,
      SliderComponent,
      RelatedProductComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
