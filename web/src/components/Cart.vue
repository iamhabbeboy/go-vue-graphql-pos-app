<script lang="ts">
import {computed, PropType} from "vue";
import {Product} from "../types/Product";
import {useState} from "../store/store";
import useEvents from "../composable/useEvents";

 export default {
   props: {
     cart: {
       required: true,
       type: Object as PropType<Product>
     }
   },
   setup(props: any) {
     const carts = computed(() => props.cart);

     const remove = (product: Product) => {
       useEvents.remove(product)
     }
     
     return {
       carts,
       remove
     }
   }
 }
</script>
<template>
  <table class="min-w-full">
    <tbody>
    <tr class="bg-white border-b" v-for="(cart, index) of carts" :key="index">
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ index + 1 }}</td>
      <td class="text-sm text-gray-900 font-light px-6 py-4">
        {{ cart.title }}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <input type="text" :value="cart.quantity" class="border w-10 p-2"/>
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        10
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-red-600">
        <button @click="remove(cart)"><icon :icon="['fa', 'times-circle']" /></button>
      </td>
    </tr>
    <tr class="border-b">
      <th colspan="3" class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">&nbsp;</th>
    </tr>
    <tr>
      <th colspan="3">&nbsp;</th>
    </tr>
    </tbody>
  </table>
</template>