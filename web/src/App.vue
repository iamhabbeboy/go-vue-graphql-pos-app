<script lang="ts">
import NavBar from "./components/NavBar.vue";
import {ref} from "vue"

export default {
  components: {
    NavBar
  },
  setup() {
    const products = ref([{
      'title': 'Soft Silicone back case for iphone 13',
      'price': '1200',
      'quantity': 10
    }, {
      'title': 'iphone 13',
      'price': '1200',
      'quantity': 10
    }]);

    return {
      products
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
        <div class="border w-2/12 ml-2 p-4 mb-2 text-center shadow-md" v-for="(product, index) of products"
             :key="index">
          <img src="./assets/product.webp"/>
          <h4 class="text-sm text-center">{{ product.title }}</h4>
          <h6 class="font-bold text-sm" style="font-size: 12px">&#8358;{{ product.price }}</h6>
          <button class="bg-blue-600 text-sm text-white mt-2 rounded-md p-2 hover:bg-blue-400">Add to cart</button>
        </div>
      </div>
      <div class="border-l w-3/12">
        <div class="text-center font-bold bg-gray-100 p-4">Checkout</div>
        <div class="flex justify-between text-sm font-bold border-b p-2">
          <div>Title</div>
          <div>Price</div>
          <div>Qty</div>
          <div>Total</div>
        </div>
        <div class="border-b" style="font-size:12px">
          <div class="flex justify-between p-3">
            <div>iphone 13</div>
            <div>120</div>
            <div>1</div>
            <div>120</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
