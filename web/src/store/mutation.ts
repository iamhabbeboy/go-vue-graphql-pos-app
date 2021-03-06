import {state} from "./state";

import {Product} from "../types/Product";
import { Transaction } from "../types/Transaction";

export default {
    setCart: (cart: Product, qty: number) => {
        const productIndex: Product | undefined = state.carts.find((product: { id: number }) => product.id == cart.id);
        cart.sub_total = cart.price * cart.quantity;
        if (!productIndex) {
            return state.carts.push(cart)
        }

        productIndex.quantity = +qty
    },

    removeCart: () => {
        state.carts.splice(0, state.carts.length);
    },

    removeSingleCart: (index: number) => {
        state.carts.splice(index, 1)
    },

    setQuantity: (product: Product, value: number) => {
        const result: Product | undefined = state.carts.find((cart: { id: number }) => product.id === cart.id);
        if (!result) {
            return {}
        }

        result.quantity = value;
    },

    getCategory: () => {
        const category = state.products.map((value: { category: string }) => value.category)
        const uniqueResult = [...new Set(category)]
        state.categories = uniqueResult
    },

    setFilter: (result: any) => {
        state.filters = result;
    },

    // setTransaction: (transaction: Transaction) => {
    //     state.transactions = transaction;
    // }
}