import {Product} from "../types/Product";

import {createStore} from "../store/store";

export default {
    addToCart(product: Product) {
        if(!product) {
            return;
        }
        const {setCart} = createStore();
        setCart(product)
    }
}