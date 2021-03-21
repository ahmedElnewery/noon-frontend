import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FilterService } from 'src/app/+shared/services/filter.service';
import { IProduct } from 'src/app/+shared/interfaces/IProduct';
@Component({
  selector: 'app-by-category',
  templateUrl: './by-category.component.html',
  styleUrls: ['./by-category.component.scss']
})
export class ByCategoryComponent implements OnInit {
categoryName:string;
allproduct:any[]=[];
errMsg:string;
  constructor(private filterService:FilterService,private activatedRoute:ActivatedRoute ,private router:Router) { }
    getProductByCategoryName(cateName){
      this.filterService.getProductByCtegory(cateName).subscribe(
        data=>{this.allproduct=data;},
        err=>{
          this.errMsg=err;
        }


      );
    }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
   this.categoryName=params.get('cateName');
      
     this.getProductByCategoryName(this.categoryName);
     })
  }

}
