import {reactive} from "vue";
import {Product} from "../types/Product";
import {StateType} from "../types/State";

const data: StateType = {
    carts: [],
    products: [{
        "id": 1,
        "title": "Soft Silicone back case for iphone 13",
        "price": 1200,
        "quantity": 10
    }, {
        "id": 2,
        "title": "iphone 13",
        "price": 1200,
        "quantity": 10
    }, {
        "id": 3,
        "title": "iphone 13",
        "price": 1200,
        "quantity": 10
    }, {
        "id": 4,
        "title": "iphone 13",
        "price": 1200,
        "quantity": 10
    },  {
        "id": 5,
        "title": "iphone 13",
        "price": 1200,
        "quantity": 10
    }, {
        "id": 6,
        "title": "iphone 13",
        "price": 1200,
        "quantity": 10
    }, {
        "id": 7,
        "title": "iphone 13",
        "price": 1200,
        "quantity": 10
    }],
    categories: [{
        title: 'Smart phone',
        slug: 'smart-phone'
    }, {
        title: 'Apple Product',
        slug: 'apple-product'
    }]
};

export const state = reactive(data);