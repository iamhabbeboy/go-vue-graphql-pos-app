import { reactive, provide, inject, readonly } from 'vue';
import mutation from "./mutation"
import {state} from "./state"

export const stateSymbol = Symbol('state');
export const createStore = () => {
    return { ...mutation, state: state };
}
export const useState = () => inject(stateSymbol);
export const provideState = () => provide(
    stateSymbol,
    createStore()
);