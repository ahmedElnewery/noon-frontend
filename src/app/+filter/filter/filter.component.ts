import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FilterService } from 'src/app/+shared/services/filter.service';
import { IProduct } from 'src/app/+shared/interfaces/IProduct';
import { IOptions, ISubCategeory } from 'src/app/+shared/interfaces/ICategory';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  products: IProduct[] = [];
  orginalProduct: IProduct[] = [];

  productSize: number;
  subcategoryName;
  pages: any;
  nextPage:number=1;
  prevPage:number=0; 
  currentPage:number=0;
  showProductSize: number;
  specialProperties:string[];
  option:IOptions;
  constructor(private activatedRoute: ActivatedRoute, private filterService: FilterService) { }
  getProducts(subcategory) {
    this.filterService.getProductBySubcategory(subcategory).subscribe(

      data => {
        this.products = data;
        this.orginalProduct = data;
        this.productSize = this.products.length;
        this.buildpages()
      }
    );

  }
  buildpages(){
    this.showProductSize = Math.ceil(this.productSize / 4);
        
       
        this.pages = [
          {
            start:0,
            end:this.showProductSize
          },
          {
            start:this.showProductSize,
            end:this.showProductSize*2
          },
          {
            start:this.showProductSize*2,
            end:this.showProductSize*3
          },
          {
            start:this.showProductSize*3,
            end:this.productSize  
          }
        ];
//        this.disabled();
      
  }
  prevPageFun(){
    this.nextPage=this.currentPage;
    this.prevPage=this.currentPage-1;
     if(this.nextPage>3)
    
    this.nextPage=3;
    
     if(this.prevPage<0)
     this.prevPage=0;
    this.goToNext(this.prevPage);
    this.currentPage=this.prevPage;
    console.log( this.pages[this.currentPage]);
  }
  nextPageFun(){
    this.nextPage=this.currentPage+1;
    this.prevPage=this.currentPage-1;
    
     if(this.nextPage>3)
    
    this.nextPage=3;
    
     if(this.prevPage<0)
     this.prevPage=0;
     this.currentPage=this.nextPage;
    this.goToNext(this.nextPage);
    console.log( this.pages[this.currentPage]);
  }

  goToNext(index) {
    
  this.products=this.orginalProduct.slice(this.pages[index].start,this.pages[index].end);
  // this.productSize=this.products.length;
 this.currentPage=index;
  console.log( this.pages[this.currentPage]);

  }
  highToLow() {
    function compare(a: any, b: any) {
      if (a.price < b.price) {
        return 1;
      }
      if (a.price > b.price) {
        return -1;
      }
      return 0;
    }
    var list = this.products;
    list.sort(compare);
    this.products = list;
    this.orginalProduct = list;

    this.productSize = this.products.length;

  }
  lowToHigh() {
    function compare(a: any, b: any) {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      return 0;
    }
    var list = this.products;
    list.sort(compare);
    this.products = list;
    this.orginalProduct = list;
    this.productSize = this.products.length;
  }
  goProduct(input1:any,input2:any) {
    var val1 = parseInt(input1);
    var val2=parseInt(input2)
    this.products = this.orginalProduct.filter((item) => item.price >= val1 && item.price<= val2);
    //this.orginalProduct = this.products;
    this.productSize = this.products.length;
    this.buildpages()
  }
  startFilter(rang){
    var val1 = parseFloat(rang);
    
    this.products = this.orginalProduct.filter((item) => item.rating>=val1 );
    //this.orginalProduct = this.products;
    this.productSize = this.products.length;
    this.buildpages()
  }
  goBrand(brand){
    var val1 = brand.toString();
    
    this.products = this.orginalProduct.filter((item) => item.brand>=val1 );
    //this.orginalProduct = this.products;
    this.productSize = this.products.length;
    this.buildpages()
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {

      this.subcategoryName = params.get('subcateName');

      this.getProducts(this.subcategoryName);
      this.filterService.getAllSubcategoryByName(this.subcategoryName).subscribe(
        (date)=>{
          console.log(date.opti);

        }
      );

    })
   
  }

}
