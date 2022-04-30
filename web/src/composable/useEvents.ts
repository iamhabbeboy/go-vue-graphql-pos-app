import {Product} from "../types/Product";
import {createStore, useState} from "../store/store";

const {setCart, removeCart, removeSingleCart} = createStore();

export default {
    addToCart(product: Product) {
        if(!product) {
            return;
        }

        setCart(product)
    },

    clearCart(state: any) {
       if(!state.carts) {
           return alert("Not implementation available")
       }
       removeCart()
    },

    remove(product: Product, state: any) {
        const findIndex = state.carts.findIndex((cart: { id: number; }) => cart.id === product.id)
        removeSingleCart(findIndex)
    }
}