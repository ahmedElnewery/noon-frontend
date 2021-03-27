import { IProduct } from './IProduct';
export interface ICategeory{
 name:string,
 displayName:string,
 subcategeory:ISubCategeory[]
}
export interface ISubCategeory{
  name:string,
  displayName:string,
 }
 export interface IOptions{

    options:Array<any>,
    cateid:number,
    name:string
   
 }
export interface IFashion{
size:string,
color:string,
material:string
}

export interface ITV extends IProduct{
noOfHDMI:number,
  noOfUsb:number
}
export interface IMobile{
  internalMemory:string,
  screenSize:string,
  battery:string
}
export interface ICamera{
  resolution:string
}
export interface ILabtop{
  ram:string,
  screenSize:string,
  hardDisk:string
}
