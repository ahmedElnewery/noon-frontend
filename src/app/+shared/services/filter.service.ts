import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/+shared/interfaces/IProduct';
@Injectable({
  providedIn: 'root'
})
export class FilterService {
  _url="";

  constructor(private _http:HttpClient) { }
//productByCategory:any[]=[];
specialProperty(subcategoryName){

}
getProductByCtegory(categoryName){
this._url="http://localhost:8000/api/products/bycategory/"+categoryName;
return this._http.get<any>(this._url);
}
getAllCategory(){
this._url="http://localhost:8000/api/filter/category";
return this._http.get<any>(this._url);

}
getAllSubcategoryByCateId(CateId){
  this._url="http://localhost:8000/api/filter/subcategory/"+CateId;
  return this._http.get<any>(this._url);
}
getProductBySubcategory(SubcategoryName){
  this._url="http://localhost:8000/api/products/bysubcategory/"+SubcategoryName;
  return this._http.get<any>(this._url);
}


getAllSubcategoryByName(cateName){
  this._url="http://localhost:8000/api/filter/subcategoryarr/"+cateName;
  return this._http.get<any>(this._url);
}
}
