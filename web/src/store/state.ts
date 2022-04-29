import {reactive} from "vue";
import {Product} from "../types/Product";

interface stateType {
    carts: Product[],
}
const data: stateType = {
    carts: [],
};

export const state = reactive(data);