import { BaseURL } from '../config';

export const OrderAPI = {
    ADD_ORDER: `${BaseURL}/api/orders/create-order`,
    GET_ALL_ORDER: `${BaseURL}/api/orders`,
    GET_ORDER_OF_USER: `${BaseURL}/api/orders/getOrders`,
    REMOVE_ORDER: `${BaseURL}/api/orders`
}
