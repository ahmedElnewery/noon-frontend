import { ITV } from './../interfaces/ICategory';

import { IProduct } from 'src/app/+shared/interfaces/IProduct';
import { IReview } from "../interfaces/IReview";
import { IMenWear } from '../interfaces/IFashion';

export class Product implements IProduct {
  name: string;
  image: string[];
  brand: string;
  category: string;
  subCategeory: string;
  description: string;
  countInStock: number;
  price: number;

  constructor(
    name: string,
    image: string[],
    brand: string,
    category: string,
    subCategeory: string,
    description: string,
    countInStock: number,
    price: number,
  ) {
    this.name = name;
    this.image = image;
    this.brand = brand;
    this.category = category;
    this.subCategeory = subCategeory
    this.description = description;
    this.countInStock = countInStock;
    this.price = price;
  }
}
// export class TV extends Product {
//   noOfHDMI:number;
//   noOfUsb:number;
//   constructor(name:string,image:string[],brand:string,category:string,subCategeory:string,description:string,countInStock:number,price:number,noOfHDMI:number,noOfUsb:number){
//     super(name,image,brand,category,subCategeory,description,countInStock,price)
//   }

// }
export class MenWear extends Product {
  size:string;
  material:string
  color:string
  constructor(name: string, image: string[], brand: string, category: string, subCategeory: string, description: string, countInStock: number, price: number, material: string, size: string, color: string) {
    super(name, image, brand, category, subCategeory, description, countInStock, price)
    this.size = size
    this.material = material;
    this.color = color;

  }
}
