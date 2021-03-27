import { BaseURL } from '../config';

export const OrderAPI = {
    ADD_ORDER: `${BaseURL}/api/orders/create-order`,
    GET_ALL_ORDER: `${BaseURL}/api/orders`,
    REMOVE_ORDER: `${BaseURL}/api/orders`
}
