import { BaseMaterial } from './../../+shared/enums/home';
import { Formulation, Foundation, HairType, SkinType } from './../../+shared/enums/beauty';
import { ProductService } from 'src/app/+shared/services/product.service';
import { Battery, InternalMemory, MemorySize, OperatingSystem, Proccessor, ScreenSize, TvScreenSize, UsbPort } from './../../+shared/enums/electronics';
import { Color, Material, Size } from './../../+shared/enums/fashion';
import { BeautyCategeory, ElectronicsSubCategeory, FahionSubCategeory, HomeSubCategeory } from './../../+shared/enums/allsubCategeory';
import { categeories } from './../../+shared/enums/allCategeory';
import { ICategeory } from './../../+shared/interfaces/ICategory';
import { IProduct } from 'src/app/+shared/interfaces/IProduct';
import { MenWear, Product } from './../../+shared/classes/productModel';
import { Component, OnInit, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

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
  selectedSubCategeory: string = "";
  iAmOnForm: FormGroup
  defaultOption: string = 'please select..';
  /******************* */
  electronics = ElectronicsSubCategeory
  fashion = FahionSubCategeory;
   beauty= BeautyCategeory;
   home= HomeSubCategeory
  /**************enums/******************/
//fashion
  allsizes = convertEnumToArray(Size);
  allMaterial = convertEnumToArray(Material);
  allColor = convertEnumToArray(Color);

  //mobile
  mobileScreenSize = convertEnumToArray(ScreenSize);
  mobileInternalMemroy = convertEnumToArray(InternalMemory);
  mobileBattery = convertEnumToArray(Battery);
  //labtop
  proccessor =convertEnumToArray(Proccessor)
  memorySize = convertEnumToArray(MemorySize);
  operatingSystem = convertEnumToArray(OperatingSystem)
  //tv
  tvScreenSize=convertEnumToArray(TvScreenSize);
  usbPorts= convertEnumToArray(UsbPort)
 // makeup care
 foundation =convertEnumToArray (Foundation);

 // hair
 hairType= convertEnumToArray(HairType)
 formulation = convertEnumToArray(Formulation)
 //skin
 skinType =convertEnumToArray(SkinType)
 //home
 baseMaterial = convertEnumToArray(BaseMaterial)
  /************* forms **************** */
  addProductForm = this.fb.group({
    name: [""],
    image: this.fb.array([""]),
    brand: [""],
    description: [""],
    countInStock: [0],
    price: [0],
    category: [""],
    subCategeory: [""]
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
    viewFinder: [""],
    resolution: [""],
  })
  labtop = this.fb.group({
    operatingSystem: [""],
    memorySize: [""],
    proccessor: [""]
  })
  tv = this.fb.group({
    screenSize: [""],
    noOfUsbPort: [""],
  })
  /************************* beauty form **********************/
  makeup = this.fb.group({
    color: [""],
    foundation: [""],
  })
  skinCare = this.fb.group({
    skinType: [""],
  })
  hairCare = this.fb.group({
    hairType: [""],
    formulation: [""],
  })

  /********************** Home form ******************** */

  kitchen = this.fb.group({
    baseMaterial: [""],
  })
  homeDecore = this.fb.group({
    baseMaterial: [""],
    color: [""]
  })
  furniture = this.fb.group({
    baseMaterial: [""],
    color: [""]
  })

  constructor(private fb: FormBuilder, private changeDetectorRef: ChangeDetectorRef, private productService: ProductService) {
    this.categeory.setValue(this.defaultOption, { onlySelf: true });

  }

  get image() {
    return this.addProductForm.get('image') as FormArray;
  }
  get categeory() {
    return this.addProductForm.get('category')
  }
  get subCategeory() {
    return this.addProductForm.get('subCategeory')
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
    this.subCategeory.valueChanges.subscribe((change) => {
      console.log(change)
      if (change) {
        this.selectedSubCategeory = change

      }
    })
  }
  returnProduct(categeorizedProperties) {
    let product = Object.assign(categeorizedProperties, this.addProductForm.value)
    console.log(product)
    this.productService.addProduct(product).subscribe((data) => console.log(data), err => console.log(err.message))
  }
  // add product function
  addProduct() {
    switch (this.selectedSubCategeory) {
      case this.fashion.menWear:
        this.returnProduct(this.menWear.value)
        break;
      case FahionSubCategeory.womenWear:
        this.returnProduct(this.womenWear.value)
        break;
      case FahionSubCategeory.kidWear:
        this.returnProduct(this.kidsWear.value)
        break;
      case ElectronicsSubCategeory.mobiles:
        this.returnProduct(this.mobile.value)
        break;
      case ElectronicsSubCategeory.labtops:
        this.returnProduct(this.labtop.value)
        break;
      case ElectronicsSubCategeory.tv:
        this.returnProduct(this.tv.value)
        break;
      case BeautyCategeory.hairCare:
        this.returnProduct(this.hairCare.value)
        break;
      case BeautyCategeory.skinCare:
        this.returnProduct(this.skinCare.value)
        break;
      case BeautyCategeory.makeup:
        this.returnProduct(this.makeup.value)
        break;
      case HomeSubCategeory.furniture:
        this.returnProduct(this.furniture.value)
        break;
      case HomeSubCategeory.homeDecor:
        this.returnProduct(this.homeDecore.value)
        break;
      case HomeSubCategeory.kitchen:
        this.returnProduct(this.kitchen.value)
        break;
      default:
        break;
    }
  }
}
function convertEnumToArray(data: Object) {
  return Object.keys(data)
    .map(key => ({ value: data[key], key: key }))
}
