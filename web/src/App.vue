<script lang="ts">
import NavBar from "./components/NavBar.vue";
import Checkout from "./components/Checkout.vue";
import useEvent from "./composable/useEvents";
import {Product} from "./types/Product";
import {useState} from "./store/store";

export default {
  components: {
    NavBar,
    Checkout
  },
  setup() {
    const {state}: any = useState();
    const add = (product: Product) => {
      useEvent.addToCart(product)
    }

    return {
      add,
      products: state.products,
    }
  }
}
</script>

<template>
  <NavBar/>
  <section class="w-10/12 mx-auto mt-6">
    <div class="bg-gray-100 p-3 flex">
      <input type="text" class="border rounded-md p-2" placeholder="Search..."/>
      <select class="border rounded-md p-3 w-100 ml-2">
        <option>select</option>
        <option>Category</option>
      </select>
      <button class="ml-2 bg-blue-500 p-2 rounded-md text-white">Submit</button>
    </div>
    <div class="flex justify-between mt-5">
      <div class="flex flex-wrap w-10/12">
        <div class="border w-64 ml-2 p-4 mb-2 text-center shadow-md" v-for="(product, index) of products"
             :key="index">
          <img src="./assets/product.webp"/>
          <h4 class="text-sm text-center">{{ product.title }}</h4>
          <h6 class="font-bold text-sm" style="font-size: 12px">&#8358;{{ product.price }}</h6>
          <button class="bg-blue-600 text-sm text-white mt-2 rounded-md p-2 hover:bg-blue-400" @click="add(product)">Add
            to cart
          </button>
        </div>
      </div>
      <Checkout />
    </div>
    <div class="p-10 bg-gray-100 mt-20">
      Designed by Bashlabs Innovation
    </div>
  </section>
</template>
