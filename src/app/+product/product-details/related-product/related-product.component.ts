import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/+shared/interfaces/IProduct';
import { ProductService } from 'src/app/+shared/services/product.service';
declare var $: any;

@Component({
  selector: 'app-related-product',
  templateUrl: './related-product.component.html',
  styleUrls: ['./related-product.component.scss']
})
export class RelatedProductComponent implements OnInit {
  @Input() subcategory
  constructor(private productServ: ProductService) { }
  relatedProducts: IProduct[] = [];
  errorMessage: string = '';
  loading: boolean = false

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['subcategory']) {
         this.getProductsBySubcategory()
        }
        console.log("related")
      }
      getProductsBySubcategory() {
        this.loading = true
        this.productServ.getProductsBySubcategory(this.subcategory).subscribe(
          data => {
            this.loading = false
            this.relatedProducts = data
            $(document).ready(function () {

              $('.product-slider').slick({
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 5
              });
            })


      },

      err => {
        this.errorMessage = err;
        this.loading = false
      }
    );

  }
  // initializeSlider() {
  //   $(document).ready(function () {
  //     console.log($('.related-product').width())
  //     $('.related-product').slick({
  //       dots: false,
  //       arrows: true,
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //       focusOnSelect: true,
  //       infinite: true
  //     });
  //   })
  // }
}
