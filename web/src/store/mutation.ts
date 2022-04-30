import {state} from "./state";

import {Product} from "../types/Product";
export default {
    setCart: (cart: Product) => {
        state.carts.push(cart)
    },
    removeCart: () => {
        state.carts.splice(0, state.carts.length);
    },

    removeSingleCart: (index: number) => {
        state.carts.splice(index, 1)
    }
}