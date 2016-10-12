export interface Pricing {
    id: number;
    urnid: string;
    name: string;
    variants: PriceTerm[];
}

export interface PriceTerm {
    term_12m: PriceVariant[];
    term_24m: PriceVariant[];
    term_36m: PriceVariant[];
}

export interface PriceVariant {
    id: number;
    product_id: number;
    name: string;
    sku: string;
    price: string;
    //term: string;
    service_transport: string;
    currency: string;
}
