import { categeories } from './../../../+shared/enums/allCategeory';
import { AllSubcategories } from './../../../+shared/enums/allsubCategeory';
import { Color, Size } from './../../../+shared/enums/fashion';
import { IProduct } from './../../../+shared/interfaces/IProduct';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.scss']
})
export class ProductSummaryComponent implements OnInit {
  @Input() currentProduct:IProduct
  detailsProduct:IProduct
  inStockArr:number[];
  allSizes =Size;
  allColor =Color;
  allSubcategories =AllSubcategories
  allCategories =categeories;
  product:IProduct
  constructor() {
    this.product = this.currentProduct

   }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentProduct']) {
      this.detailsProduct = this.currentProduct;
      this.inStockArr = Array.from({ length: this.detailsProduct.countInStock }, (_, i) => i + 1);

    }

}
}
