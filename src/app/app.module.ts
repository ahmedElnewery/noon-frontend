
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';


import { ProductDetailsComponent } from './+product/product-details/product-details.component';
import { ProductCartComponent } from './+product/product-cart/product-cart/product-cart.component';
import { ProductRateComponent } from './+shared-UI/product-rate/product-rate.component';
import { HeaderComponent } from './+layout/header/header.component';
import { ProductSlidshowComponent } from './+product/product-slidshow/product-slidshow.component';
import { ProductCategoryComponent } from './+product/product-category/product-category.component';
import { FooterComponent } from './+layout/footer/footer.component';
import { SliderComponent } from './shared-UI/slider/slider.component';
import { ProductSummaryComponent } from './+product/product-summary/product-summary.component';
import { ProductsSpecificationComponent } from './+product/products-specification/products-specification.component';
import { ProductSliderComponent } from './+product/product-slider/product-slider.component';


@NgModule({
  declarations: [
    AppComponent,
      TestComponent,
      ProductCartComponent,
      ProductRateComponent,
      HeaderComponent,
      ProductSlidshowComponent,
      ProductCategoryComponent,
      FooterComponent,
      SliderComponent,
      ProductDetailsComponent,
      ProductSummaryComponent,
      ProductsSpecificationComponent,
      ProductSliderComponent,
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
