import { CartState, ShoppingCart } from './cart.model';
import { ProductVariant, ActiveStatus } from './pricing.model';

export interface User {
    id: number;
    avatar?: string;
    email: string;
    enterpriseInfo?: EnterpriseInfo;
    fingerPrint?: string;
    cartInfo?: CartInfo;
    rememberMe?: boolean;
    token?: string;
    loggedIn: boolean;
    status?: ActiveStatus;
}

export interface EnterpriseInfo {
    ein: number;
    ownTransport: boolean;
}

export interface CartInfo {
    cartState: CartState;
    shoppingCartId: string;
    cartItemCount: number;
}

