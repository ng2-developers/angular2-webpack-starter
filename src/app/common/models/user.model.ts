import { CartState, ShoppingCart } from './cart.model';

export interface User {
    id: number;
    email: string;
    enterpriseInfo?: EnterpriseInfo;
    fingerPrint?: string;
    cartState?: CartState;
    shoppingCartId?: string;
}

export interface EnterpriseInfo {
    ein: number;
    ownTransport: boolean;
}


