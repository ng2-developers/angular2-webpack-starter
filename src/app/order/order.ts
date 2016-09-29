import {ShoppingCart} from '../shopping-cart/shopping-cart';

export class Order {
    orderName: string;
    orderDate: string;
    orderValue: number;
    shoppingCart: ShoppingCart;
} 