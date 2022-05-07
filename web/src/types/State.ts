import {Product} from "./Product";
import { Transaction } from "./Transaction";

export interface StateType {
    carts: Product[],
    products: Product[],
    categories: any,
    filters: [],
    transactions: Transaction[]
}