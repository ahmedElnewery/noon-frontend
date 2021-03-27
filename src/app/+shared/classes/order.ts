import { IClient } from './../interfaces/IOrder';
//import { IUser } from '../interfaces/IUser';
import { IProduct } from '../interfaces/IProduct';

export class Order {
    constructor(
        public products?: IProduct[],
        public userId?: number,
        public clientInfo?: IClient,
        public paymentMethod?: string,
        public orderStatus?: string,
        //public deliveryOptions?: IDeliveryOption,
        public leaveAtHome?: boolean,
        public getItTogether?: boolean,
        public totalPrice?: number,
        public isDelivered?: boolean
    ) { }
}