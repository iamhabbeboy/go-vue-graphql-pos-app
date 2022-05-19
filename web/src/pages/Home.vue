<script lang="ts">
import Product from "../components/Product.vue";
import Checkout from "../components/Checkout.vue";
import Search from "../components/Search.vue";

import { useState } from "../store/store";
import { computed } from "vue";
import Pagination from "../components/Pagination.vue";
import handlePagination from "../composable/usePagination";

export default {
  components: {
    Checkout,
    Product,
    Search,
    Pagination,
  },
  setup() {
    const { state }: any = useState();
    const products = computed(() =>
      state.filters.length ? state.filters : state.products
    );

    const handlePaginationValue = handlePagination(products.value);

    return {
      // products,
      ...handlePaginationValue,
    };
  },
};
</script>

<template>
  <div>
    <div class="hide-print"></div>
    <section class="w-10/12 mx-auto mt-6">
      <div class="bg-gray-100 p-3 flex hide-print">
        <Search />
      </div>
      <div class="flex justify-between mt-5">
        <div class="hide-print">
          <div class="flex flex-wrap">
            <Product
              v-for="(product, index) of paginatedData"
              :key="index"
              :data="product"
            />
          </div>
          <div>
            <Pagination :data="data" :perPage="perPage" :backPage="backPage" :nextPage="nextPage" :gotoPage="gotoPage" :page="page" />

            <!-- <div class="mt-10">
              <nav aria-label="Page navigation example">
                <ul class="inline-flex -space-x-px">
                  <li>
                    <button
                      @click="backPage"
                      class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Previous
                    </button>
                  </li>
                  <li>
                    <button
                      v-for="item in Math.ceil(data.length / perPage)"
                      :key="item"
                      @click="() => goToPage(item)"
                      class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      {{ item }}
                    </button>
                  </li>
                  <li>
                    <button
                      @click="nextPage"
                      class="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div> -->
          </div>
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
