import {reactive} from "vue";
import {Product} from "../types/Product";

interface stateType {
    carts: Product[],
    products: Product[],
}
const data: stateType = {
    carts: [],
    products: [{
        "title": "Soft Silicone back case for iphone 13",
        "price": 1200,
        "quantity": 10
    }, {
        "title": "iphone 13",
        "price": 1200,
        "quantity": 10
    }, {
        "title": "iphone 13",
        "price": 1200,
        "quantity": 10
    }, {
        "title": "iphone 13",
        "price": 1200,
        "quantity": 10
    },  {
        "title": "iphone 13",
        "price": 1200,
        "quantity": 10
    }, {
        "title": "iphone 13",
        "price": 1200,
        "quantity": 10
    }, {
        "title": "iphone 13",
        "price": 1200,
        "quantity": 10
    }],
};

export const state = reactive(data);