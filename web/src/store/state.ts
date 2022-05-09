import {reactive} from "vue";
import {StateType} from "../types/State";

const data: StateType = {
    carts: [],
    products: [{
        "id": 1,
        "title": "Soft Silicone back case for iphone 13",
        "price": 1200,
        "quantity": 1,
        "category": "smart phone",
        "sub_total": 0,
        "image": "/src/assets/product.webp",
        "sku": "SP100",
        "stock": 10
    }, {
        "id": 2,
        "title": "iphone 13",
        "price": 1200,
        "quantity": 1,
        "category": "smart phone",
        "sub_total": 0,
        "image": "/src/assets/product.webp",
        "sku": "SP101",
        "stock": 10
    }, {
        "id": 3,
        "title": "Apple Magic Mouse",
        "price": 50000,
        "quantity": 1,
        "category": "computer",
        "sub_total": 0,
        "image": "/src/assets/product.webp",
        "sku": "SP102",
        "stock": 10
    }, {
        "id": 4,
        "title": "Apple MacBook Pro",
        "price": 1200000,
        "quantity": 1,
        "category": "computer",
        "sub_total": 0,
        "image": "/src/assets/product.webp",
        "sku": "AP001",
        "stock": 10
    },  {
        "id": 5,
        "title": "Samsung A30",
        "price": 70000,
        "quantity": 1,
        "category": "smart phone",
        "sub_total": 0,
        "image": "/src/assets/product.webp",
        "sku": "AP002",
        "stock": 10
    }, {
        "id": 6,
        "title": "Samsung A32",
        "price": 120000,
        "quantity": 1,
        "category": "smart phone",
        "sub_total": 0,
        "image": "/src/assets/product.webp",
        "sku": "SP104",
        "stock": 10
    }, {
        "id": 7,
        "title": "Hp Elite Book",
        "price": 80000,
        "quantity": 1,
        "category": "computer",
        "sub_total": 0,
        "image": "/src/assets/product.webp",
        "sku": "CP001",
        "stock": 10
    }],
    categories: [],
    filters: [],
    transactions: [{
        "referenceId": "01921234324",
        "product": {
            "title": "iphone 13",
            "price": 12000
        },
        "quantity": 100,
        "sub_total": 2000,
        "total": 20000
    },{
        "referenceId": "01921234324",
        "product": {
            "title": "iphone 13",
            "price": 12000
        },
        "quantity": 100,
        "sub_total": 2000,
        "total": 20000
    },{
        "referenceId": "01921234324",
        "product": {
            "title": "iphone 13",
            "price": 12000
        },
        "quantity": 100,
        "sub_total": 2000,
        "total": 20000
    },{
        "referenceId": "01921234324",
        "product": {
            "title": "iphone 13",
            "price": 12000
        },
        "quantity": 100,
        "sub_total": 2000,
        "total": 20000
    },{
        "referenceId": "01921234324",
        "product": {
            "title": "iphone 13",
            "price": 12000
        },
        "quantity": 100,
        "sub_total": 2000,
        "total": 20000
    }]
};

export const state = reactive(data);