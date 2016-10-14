export interface Cart {
    inventoryItems: InventoryItems[];
}

export interface InventoryItems {
    lineItem: string;
    itemName: string;
    quantity: number;
}

export enum CartState {
    'LandingPage',
    'Locations',
    'Terms And Conditions'
}

export interface ShoppingCart {
    id?: number;
    state?: CartState;
    currentItemName?: string;
    currentItemId?: string;
    lineItems?: LineItem[];
}

export interface LineItem {
    id?: number;
    productName: string;
    productId: string;
    productTemplateName: string;
    productTemplateId: string;
    locations?: SDWANLocationInfo[];
}

export interface LocationInfo {
    productTemplateId: string;
    location: SDWANLocationInfo;
}

export interface ContactInfo {
    id?: number;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

export interface EnterpriseAddress {
    id?: number;
    locationName: string;
    addressLine: string;
    street: string;
    city: string;
    country: string;
    state: string;
    zipCode: string;
}

export interface SDWANLocationInfo {
    id?: number;
    serviceContact: ContactInfo;
    serviceAddress: EnterpriseAddress;
    shippingAddress: EnterpriseAddress;
}
