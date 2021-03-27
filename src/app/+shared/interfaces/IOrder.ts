//import { IUser } from './IUser';
import { IProduct } from './IProduct';

export interface IClient {
    firstName: string;
    lastName: string;
    mobileNumber: string;
    city: string;
    address: string;
}

// export interface IDeliveryOption {
//     leaveAtHome: boolean;
//     getItTogether: boolean;
// }

export interface IOrder {
    products: IProduct[];
    userId: number;
    clientInfo: IClient;
    paymentMethod: string;
    orderStatus: string;
    leaveAtHome: boolean;
    getItTogether: boolean;
    totalPrice: number;
    isDelivered: boolean;
}
