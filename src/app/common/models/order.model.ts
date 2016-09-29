import {ShoppingCart} from './shopping-cart.model';

export interface Order {
    orderName: string;
    orderDate: string;
    orderValue: number;
    shoppingCart: ShoppingCart;
} 