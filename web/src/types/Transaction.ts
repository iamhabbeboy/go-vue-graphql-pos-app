import { Product } from "./Product";

export interface Transaction {
    referenceId: string,
    product: any,
    quantity: number,
    sub_total: number,
    total: number
}