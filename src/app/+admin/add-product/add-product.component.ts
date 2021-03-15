import { Battery, InternalMemory, ScreenSize } from './../../+shared/enums/electronics';
import { Color, Material, Size } from './../../+shared/enums/fashion';
import { ElectronicsSubCategeory, FahionSubCategeory } from './../../+shared/enums/allsubCategeory';
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
        { name: "kidWear", displayName: "Kid Wear" }
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
    /**************************************/
  subcategeoryList = [];
  selectedSubCategeory: string = ""
  defaultOption: string = 'please select..';
  /******************* */
  electronics =ElectronicsSubCategeory
  fashion = FahionSubCategeory;

  //enums
  allsizes = convertEnumToArray(Size);
  allMaterial = convertEnumToArray(Material);
  allColor = convertEnumToArray(Color);
  /****** mobile****** */
  mobileScreenSize= convertEnumToArray(ScreenSize);
  mobileInternalMemroy = convertEnumToArray(InternalMemory);
  mobileBattery = convertEnumToArray(Battery);
  // product: IProduct = new Product("", [""], "", "", "", 0, 0, 0, [])
  /************* forms **************** */
  addProductForm = this.fb.group({
    name: [""],
    image: this.fb.array([""]),
    brand: [""],
    describtion: [""],
    countInStock: [0],
    price: [0],
    categeory: [""],
    subcategeory: [""]
  })
  ///********* fashion form*************** */
  menWear = this.fb.group({
    size: [""],
    material: [""],
    color: [""]
  })
  womenWear = this.fb.group({
    size: [""],
    material: [""],
    color: [""]
  })
  kidsWear = this.fb.group({
    size: [""],
    material: [""],
    color: [""]
  })
/*****************  elctronics form *************************** */
mobile = this.fb.group({
  screenSize: [""],
  internalMemory: [""],
  battery: [""]
})
camera = this.fb.group({
  viewFinder:[""],
  resolution: [""],
})
labtop = this.fb.group({
  hardDisk:[""],
  ram: [""],
  screenSize:[""]
})
tv = this.fb.group({
  screenSize:[""],
  noOfUsbPort: [""],
})
/************************* beauty form **********************/
makeup = this.fb.group({
  screenSize: [""],
  internalMemory: [""],
  battery: [""]
})
skinCare = this.fb.group({
  viewFinder:[""],
  resolution: [""],
})
hairCare = this.fb.group({
  hardDisk:[""],
  ram: [""],
  screenSize:[""]
})

/********************** Home form ******************** */

kitchen = this.fb.group({
  baseMaterial:[""],
})
homeDecore = this.fb.group({
  baseMaterial:[""],
  color:[""]
})
furniture = this.fb.group({
  baseMaterial:[""],
  color:[""]
})

  constructor(private fb: FormBuilder, private changeDetectorRef: ChangeDetectorRef) {
    this.categeory.setValue(this.defaultOption, { onlySelf: true });

  }

  get image() {
    return this.addProductForm.get('image') as FormArray;
  }
  get categeory() {
    return this.addProductForm.get('categeory')
  }
  get subcategeory() {
    return this.addProductForm.get('subcategeory')
  }
  //life cycle hooks
  ngOnInit(): void {
    this.onCategeoryChange();
    this.onsubCategeoryChange()

  }
  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();

  }
  /******** */
  addNewImgSrc() {
    this.image.push(this.fb.control(''))
  }
  removeImgSrc(i) {
    this.image.removeAt(i);
  }
  onCategeoryChange() {
    this.categeory.valueChanges.subscribe((change) => {
      switch (change) {
        case categeories.fashion:
          this.subcategeoryList = this.allCategeories.filter((cat) => cat.name === categeories.fashion)[0].subcategeory;
          break;
        case categeories.home:
          this.subcategeoryList = this.allCategeories.filter((cat) => cat.name === categeories.home)[0].subcategeory
          break;
        case categeories.beauty_health:
          this.subcategeoryList = this.allCategeories.filter((cat) => cat.name === categeories.beauty_health)[0].subcategeory
          break;
        case categeories.electronics:
          this.subcategeoryList = this.allCategeories.filter((cat) => cat.name === categeories.electronics)[0].subcategeory
          break;
        default:
          break;
      }
    })
  }
  onsubCategeoryChange() {
    this.subcategeory.valueChanges.subscribe((change) => {
      console.log(change)
      if(change){
        this.selectedSubCategeory =change

      }
    })
  }
  addMenWear(form){

    console.log({...this.addProductForm.value,... this.menWear.value})
  }
}
function convertEnumToArray(data: Object) {
  return Object.keys(data)
    .map(key => ({ value: data[key], key: key }))
}
