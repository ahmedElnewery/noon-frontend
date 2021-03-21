import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FilterService } from 'src/app/+shared/services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  products:IProduct[]=[];
  orginalProduct:IProduct[]=[];
  productSize:number;
  subcategoryName;
  constructor(private activatedRoute:ActivatedRoute,private filterService:FilterService) { }
  getProducts(subcategory){
    this.filterService.getProductBySubcategory(subcategory).subscribe(

      data=>{this.products=data;
       this.orginalProduct=data;
      }


    );
  }
  highToLow(){
    function compare( a:any, b:any ) {
      if ( a.price < b.price ){
        return 1;
      }
      if ( a.price > b.price ){
        return -1;
      }
      return 0;
    }
    var list=this.products;
    list.sort(compare);
  this.products=list;

    this.productSize=this.products.length;
   
  }
  lowToHigh(){
    function compare( a:any, b:any ) {
      if ( a.price < b.price ){
        return -1;
      }
      if ( a.price > b.price ){
        return 1;
      }
      return 0;
    }
    var list=this.products;
    list.sort(compare);
  this.products=list;

    this.productSize=this.products.length;
  }
  goProduct(input1:any){
    var x=parseInt(input1);
    this.products=this.products.filter((item)=>item.price>x);
    this.productSize=this.products.length;
   }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
   
      this.subcategoryName=params.get('subcateName');
      
      this.getProducts(this.subcategoryName);
     })
  }

}
