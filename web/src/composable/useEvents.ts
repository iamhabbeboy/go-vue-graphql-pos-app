import {Product} from "../types/Product";
import {createStore, useState} from "../store/store";
import {state} from "../store/state";

const {setCart, removeCart, removeSingleCart, setQuantity} = createStore();

export default {
    qty: 0,

    addToCart(product: Product, cart: any) {
        if (!product) {
            return;
        }
        cart.quantity += 1

        setCart(product, cart.quantity)
    },

    clearCart(state: any) {
        if (!state.carts) {
            return alert("Not implementation available")
        }
        removeCart()
    },

    remove(product: Product, state: any) {
        const findIndex = state.carts.findIndex((cart: { id: number; }) => cart.id === product.id)
        removeSingleCart(findIndex)
    },

    setQty(product: Product, qty: number, state: any) {
        const cart: Product = state?.carts.find((value: { id: number }) => value.id === product.id)
        cart.quantity = qty;
        setCart(product, cart.quantity)
    }
}