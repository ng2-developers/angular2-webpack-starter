export interface Pricing {
    id: number;
    product_id: number;
    urnId: string;
    name: string;
//     variants: PriceTerm[];
// }

// export interface PriceTerm {
//     term_12m: PriceVariant[];
//     term_24m: PriceVariant[];
//     term_36m: PriceVariant[];
// }

// export interface PriceVariant {
//     id: number;
//     product_id: number;
//     name: string;
//     sku: string;
//     price: string;
//     //term: string;
//     service_transport: string;
//     currency: string;
    productType: string;
    currency: string;
    productVariants: ProductVariant[];
}

export interface ProductVariant {
    variantId: number;
    productId: string;
    name: string;
    sku: string;
    priceInfo: PriceInfo;
}

export interface PriceInfo {
    term_12: TermPrice;
    term_24: TermPrice;
    term_36: TermPrice;
}

export interface TermPrice {
    own: number;
    ctl: number;
}

export interface ActiveStatus {
    mode: string;
    sku: string;
    term?: string;
    productVariant?: ProductVariant;
}
