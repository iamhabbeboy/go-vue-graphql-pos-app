import {reactive} from "vue";
import {StateType} from "../types/State";

const data: StateType = {
    carts: [],
    products: [{
        "id": 1,
        "title": "Soft Silicone back case for iphone 13",
        "price": 1200,
        "quantity": 1,
        "category": "smart phone"
    }, {
        "id": 2,
        "title": "iphone 13",
        "price": 1200,
        "quantity": 1,
        "category": "smart phone"
    }, {
        "id": 3,
        "title": "Apple Magic Mouse",
        "price": 50000,
        "quantity": 1,
        "category": "computer"
    }, {
        "id": 4,
        "title": "Apple MacBook Pro",
        "price": 1200000,
        "quantity": 1,
        "category": "computer"
    },  {
        "id": 5,
        "title": "Samsung A30",
        "price": 70000,
        "quantity": 1,
        "category": "smart phone"
    }, {
        "id": 6,
        "title": "Samsung A32",
        "price": 120000,
        "quantity": 1,
        "category": "smart phone"
    }, {
        "id": 7,
        "title": "Hp Elite Book",
        "price": 80000,
        "quantity": 1,
        "category": "computer"
    }],
    categories: [],
    filters: []
};

export const state = reactive(data);