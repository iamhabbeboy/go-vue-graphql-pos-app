<script lang="ts">
import NavBar from "./components/NavBar.vue";
import Product from "./components/Product.vue";
import Checkout from "./components/Checkout.vue";

import {useState} from "./store/store";

export default {
  components: {
    NavBar,
    Checkout,
    Product
  },
  setup() {
    const {state}: any = useState();

    return {
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
        <Product v-for="(product, index) of products"
                 :key="index" :data="product" />
      </div>
      <Checkout />
    </div>
    <div class="p-10 bg-gray-100 mt-20">
      Designed by Bashlabs Innovation
    </div>
  </section>
</template>
