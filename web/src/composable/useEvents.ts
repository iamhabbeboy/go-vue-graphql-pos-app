import {Product} from "../types/Product";
import {createStore, useState} from "../store/store";
import {state} from "../store/state";

const {setCart, removeCart, removeSingleCart, setFilter} = createStore();

export default {
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

    setQty(product: Product, quantity: number, state: any) {
        const cart: Product = state?.carts.find((value: { id: number }) => value.id === product.id)
        cart.quantity = quantity;
        setCart(product, cart.quantity)
    },

    search(text: HTMLInputElement, category: string | undefined) {
        if(text.value === '' && !category) {
            state.products = state.products
        }
        const response: Product | any = state.products.filter((product: Product) => {
            if(text.value !== '' && !category) {
                const value = text.value.toLowerCase()
                const title = product.title.toLowerCase()
                return title.includes(value);
            }
            if(text.value === '' && category) {
                return product.category.includes(category)
            }
            if(text.value !== '' && category) {
                const value = text.value.toLowerCase()
                const title = product.title.toLowerCase()
                return title.includes(value) && product.category.includes(category)
            }
            return [];
        });

        setFilter(response);
    }
}