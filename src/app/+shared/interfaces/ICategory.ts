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
export interface IFashion{
brand:string,
size:string,
color:string,
depatment:string,
material:string
}
export interface IElectronic{
  barnd:string
}
export interface ITV extends IProduct{
noOfHDMI:number,
  noOfUsb:number
}
export interface IMobile{
  ram:string,
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
