import {Product} from "../types/Product";
import {createStore, useState} from "../store/store";

const {setCart, removeCart, removeSingleCart, setQuantity} = createStore();

export default {
    qty: 0,

    addToCart(product: Product, cart: any) {
        if(!product) {
            return;
        }

        product.quantity += cart ? product.quantity + 1 : 0

        setCart(product, product.quantity)
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
    },

    setQty(product: Product, qty: number) {
        setCart(product, qty)
    }
}