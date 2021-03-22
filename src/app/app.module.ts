import { RelatedProductComponent } from './+product/product-details/related-product/related-product.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { ProductDetailsComponent } from './+product/product-details/product-details.component';
import { ProductCartComponent } from './+product/+main-page/product-cart/product-cart.component';
import { ProductRateComponent } from './+shared-UI/product-rate/product-rate.component';
import { HeaderComponent } from './+layout/header/header.component';
import { ProductSlidshowComponent } from './+product/+main-page/product-slidshow/product-slidshow.component';
import { ProductCategoryComponent } from './+product/+main-page/product-category/product-category.component';
import { FooterComponent } from './+layout/footer/footer.component';
import { ProductSummaryComponent } from './+product/product-details/product-summary/product-summary.component';
import { ProductsSpecificationComponent } from './+product/product-details/products-specification/products-specification.component';
import { ProductSliderComponent } from './+product/product-details/product-slider/product-slider.component';
import { MainPageComponent } from './+product/+main-page/main-page.component';
import { ProductHotDealsComponent } from './+product/+main-page/product-hot-deals/product-hot-deals.component';
import { ProductTechDevicesComponent } from './+product/+main-page/product-tech-devices/product-tech-devices.component';
import { ProductByBrandComponent } from './+product/+main-page/product-by-brand/product-by-brand.component';
import { AddProductComponent } from './+admin/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './+auth/sign-in/sign-in.component';
import { SignUpComponent } from './+auth/sign-up/sign-up.component';
import { EnumToArrayPipe } from './+shared/pipes/enum-to-array.pipe';
import { ProductCardComponent } from './+product/+main-page/product-card/product-card.component';
import { SpinnerComponent } from './+shared-UI/spinner/spinner.component';
import { NumberToStringPipe } from './+shared/pipes/number-to-string.pipe';
import { PropertiesTableComponent } from './+product/product-details/product-summary/properties-table/properties-table.component';
import { TableRowComponent } from './+product/product-details/product-summary/properties-table/table-row/table-row.component';
import { SnakeCasePipe } from './+shared/pipes/snake-case.pipe';
import { CartFormComponent } from './+product/product-details/product-summary/cart-form/cart-form.component';
import { RatingComponent } from './+shared-UI/rating/rating.component';
import { ByCategoryComponent } from './+filter/by-category/by-category.component';
import { FilterComponent } from './+filter/filter/filter.component';
import { ProductFashionComponent } from './+product/+main-page/product-fashion/product-fashion.component';
import { SelectRatingComponent } from './+shared-UI/select-rating/select-rating.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductCartComponent,
    ProductRateComponent,
    HeaderComponent,
    ProductSlidshowComponent,
    ProductCategoryComponent,
    FooterComponent,
    ProductDetailsComponent,
    ProductSummaryComponent,
    ProductsSpecificationComponent,
    ProductSliderComponent,
    RelatedProductComponent,
    ProductTechDevicesComponent,
    ProductByBrandComponent,
    ProductHotDealsComponent,
    MainPageComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    AddProductComponent,
    EnumToArrayPipe,
    ProductCardComponent,
    SpinnerComponent,
    NumberToStringPipe,
    PropertiesTableComponent,
    TableRowComponent,
    SnakeCasePipe,
    CartFormComponent,
    RatingComponent,
    ByCategoryComponent,
    FilterComponent,
    ProductFashionComponent,
    SelectRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
