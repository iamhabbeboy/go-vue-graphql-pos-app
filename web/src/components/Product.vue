<script lang="ts">
import {computed, PropType} from "vue";
import useEvent from "../composable/useEvents";
import {Product} from "../types/Product";
import {createStore, useState} from "../store/store";

export default {
  props: {
    data: {
      required: true,
      type: Object as PropType<Product>
    }
  },
  setup(props: any) {
    const {state}: any = useState();
    const product = computed(() => props.data);

    const add = (product: Product) => {
      const cart: Product | object = state?.carts.find((value: {id: number}) => value.id === product.id) || {quantity: 1}
      useEvent.addToCart(product, cart)
    }

    return {
      add,
      product
    }
  }
}
</script>
<template>
  <div class="border w-64 ml-2 p-4 mb-2 text-center shadow-md" >
    <img src="../assets/product.webp"/>
    <h4 class="text-sm text-center">{{ product.title }}</h4>
    <h6 class="font-bold text-sm" style="font-size: 12px">&#8358;{{ product.price }}</h6>
    <button class="bg-blue-500 text-tiny font-bold text-white mt-2 rounded-md p-4 hover:bg-blue-600" @click="add(product)">Add
      to cart <icon :icon="['fa', 'shopping-cart']" />
    </button>
  </div>
</template>