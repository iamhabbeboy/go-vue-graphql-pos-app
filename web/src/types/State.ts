import {Product} from "./Product";

export interface StateType {
    carts: Product[],
    products: Product[],
    categories: any,
    filters: []
}