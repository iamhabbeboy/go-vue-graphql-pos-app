import { Product } from "./Product";

export interface Transaction {
    referenceId: string,
    product: Product,
    price: Product,
    Quantity: number,
    sub_total: number,
    total: number
}