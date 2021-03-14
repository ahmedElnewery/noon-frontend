import { ITV } from './../interfaces/ICategory';

import { IProduct } from 'src/app/+shared/interfaces/IProduct';
import { IReview } from "../interfaces/IReview";

export class Product implements IProduct{
  name: string;
  image: string[];
  brand: string;
  category: string;
  description: string;
  countInStock: number;
  price: number;
  rating: number;
  numReviews: number;
  review:IReview[];
constructor(
  name: string,
  image: string[],
  brand: string,
  category: string,
  description: string,
  countInStock: number,
  price: number,
  rating: number,

  review:IReview[]
){
  this.name= name;
  this.image= image;
  this.brand= brand;
  this.category= category;
  this.description= description;
  this.countInStock= countInStock;
  this.price= price;
  this.rating= rating;
  this.numReviews= review.length;
  this.review=review
}

}
export class TV extends Product {
  noOfHDMI:number;
  noOfUsb:number;
  tv:any
  constructor(name:string,image:string[],brand:string,category:string,description:string,countInStock:number,price:number,rating:number,review:IReview[],noOfHDMI:number,noOfUsb:number){
    super(name,image,brand,category,description,countInStock,price,rating,review);
    this.tv =new Product(name,image,brand,category,description,countInStock,price,rating,review)
  }
  build(noOfHDMI,noOfUsb){

    this.tv.noOfHDMI = noOfHDMI;
    this.tv.noOfUsb = noOfUsb
    return this.tv;
  }

}

