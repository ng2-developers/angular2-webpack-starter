export interface Pricing {
    id: number;
    urnid: string;
    name: string;
    variants: PriceVariant[];
}


export interface PriceVariant {
    id: number;
    product_id: number;
    name: string;
    sku: string;
    price: string;
    term: string;
    service_transport: string;
    currency: string;
}
