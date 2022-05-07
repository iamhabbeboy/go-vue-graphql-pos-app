<script lang="ts">

import Product from "../components/Product.vue";
import Checkout from "../components/Checkout.vue";
import Search from "../components/Search.vue";

import {useState} from "../store/store";
import {computed} from "vue";

export default {
  components: {
    Checkout,
    Product,
    Search
  },
  setup() {
    const {state}: any = useState();
    const products = computed(() => state.filters.length ? state.filters : state.products)

    return {
      products,
    }
  }
}
</script>

<template>
  <div>
    <div class="hide-print">
    </div>
    <section class="w-10/12 mx-auto mt-6">
      <div class="bg-gray-100 p-3 flex hide-print">
        <Search />
      </div>
      <div class="flex justify-between mt-5">
        <div class="flex flex-wrap hide-print">
          <Product v-for="(product, index) of products"
                  :key="index" :data="product" />
        </div>
        <Checkout />
      </div>
    </section>
  </div>
</template>

<style>
@media print {
  .hide-print {
    display: none !important;
  }

  .print {
    width: 100% !important; 
    background: red !important;
  }

  .table-show {
    width: 100%;
    display: block !important;
  }

  .table-show table {
    width: 100%;
  }
}


</style>