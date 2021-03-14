import { categeories } from './../../+shared/enums/allCategeory';
import { ICategeory } from './../../+shared/interfaces/ICategory';
import { IProduct } from 'src/app/+shared/interfaces/IProduct';
import { Product } from './../../+shared/classes/productModel';
import { Component, OnInit, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  allCategeories: ICategeory[] = [
    {
      name: "fashion", displayName: "Fashion", subcategeory: [
        { name: "menWear", displayName: "Men Wear" },
        { name: "womenWear", displayName: "Women Wear" },
        { name: "KidWear", displayName: "Kid Wear" }
      ]
    },
    {
      name: "electronics", displayName: "Electronics", subcategeory: [
        { name: "mobiles", displayName: "Mobiles" },
        { name: "labtops", displayName: "Labtops" },
        { name: "tv", displayName: "tv" }]
    },
    {
      name: "home", displayName: "Home", subcategeory: [
        { name: "kitchen", displayName: "Kitchen" },
        { name: "homeDecor", displayName: "Home Decore" },
        { name: "furniture", displayName: "Furniture" }]
    },
    {
      name: "beauty&health", displayName: "Beauty & Health", subcategeory: [
        { name: "makeup", displayName: "Makeup" },
        { name: "skinCare", displayName: "Skin Care" },
        { name: "hairCare", displayName: "Hair Care" }]
    }]
  selectedSubCategeory=[];
  default: string = 'please select..';

  product: IProduct = new Product("", [""], "", "", "", 0, 0, 0, [])
  addProductForm = this.fb.group({
    name: [""],
    image: this.fb.array([""]),
    brand: [""],
    category: [""],
    describtion: [""],
    countInStock: [0],
    price: [10],
    categeory: [""],
    subcategeory: ["dafault"]
  })
  constructor(private fb: FormBuilder, private changeDetectorRef: ChangeDetectorRef) {
    this.categeory.setValue(this.default, {onlySelf: true});
    // this.subcategeory.setValue(this.default, {onlySelf: true});

  }

  get image() {
    return this.addProductForm.get('image') as FormArray;
  }
  get categeory(){
    return this.addProductForm.get('categeory')
  }
  get subcategeory(){
    return this.addProductForm.get('subcategeory')
  }
  //life cycle hooks
  ngOnInit(): void {
    this.onCategeoryChange()
  }
  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("klnjo[[jp[j")
}
  /******** */
  addNewImgSrc() {
    this.image.push(this.fb.control(''))
  }
  removeImgSrc(i) {
    this.image.removeAt(i);
  }
  onCategeoryChange(){
    this.categeory.valueChanges.subscribe((change)=>{
switch (change) {
  case categeories.fashion:
 this.selectedSubCategeory =  this.allCategeories.filter((cat)=>cat.name === categeories.fashion)[0].subcategeory
    break;
    case categeories.home:
      this.selectedSubCategeory =  this.allCategeories.filter((cat)=>cat.name === categeories.home)[0].subcategeory
    break;
      case categeories.beauty_health:
        this.selectedSubCategeory =  this.allCategeories.filter((cat)=>cat.name === categeories.beauty_health)[0].subcategeory
    break;
    case categeories.electronics:
      this.selectedSubCategeory =  this.allCategeories.filter((cat)=>cat.name === categeories.electronics)[0].subcategeory
    break;
  default:
    break;
}
    })
    if(this.categeory.value == "fashion"){

    }
  }
}
