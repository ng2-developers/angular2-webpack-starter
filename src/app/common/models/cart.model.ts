export interface Cart {
    inventoryItems: InventoryItems[];
} 

export interface InventoryItems {
    lineItem: string;
    itemName: string;
    quantity: number;
}