import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCartComponent } from './+product/product-cart/product-cart/product-cart.component';
import { ProductRateComponent } from './+shared-UI/product-rate/product-rate.component';
import { HeaderComponent } from './+layout/header/header.component';
import { ProductSlidshowComponent } from './+product/product-slidshow/product-slidshow.component';
import { ProductCategoryComponent } from './+product/product-category/product-category.component';
import { FooterComponent } from './+layout/footer/footer.component';

@NgModule({
  declarations: [	
    AppComponent,
      TestComponent,
      ProductCartComponent,
      ProductRateComponent,
      HeaderComponent,
      ProductSlidshowComponent,
      ProductCategoryComponent,
      FooterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
