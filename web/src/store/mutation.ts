import {state} from "./state";

import {Product} from "../types/Product";
export default {
    setCart: (cart: Product) => {
        state.carts.push(cart)
    }
}