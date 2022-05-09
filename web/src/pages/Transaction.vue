<script lang="ts">
import Search from "../components/Search.vue";
import { Product } from "../types/Product";
import { createStore, useState } from "../store/store";
import { ref } from "vue";
import { StateType } from "../types/State";
import { Transaction } from '../types/Transaction';

export default {
  components: {
    Search,
  },
  setup() {
    const { state } = useState();
    const singleTransaction = ref<Transaction>();
    const editProductElement = ref();
    const fullWidthTableElement = ref();

    const editProduct = (transaction: Transaction) => {
      editProductElement.value.classList.remove("hidden");
      fullWidthTableElement.value.classList.remove("w-full");
      singleTransaction.value = transaction;
    };

    const closeEditProduct = () => {
      editProductElement.value.classList.add("hidden");
      fullWidthTableElement.value.classList.add("w-full");
    };

    return {
      editProduct,
      singleTransaction,
      closeEditProduct,
      editProductElement,
      fullWidthTableElement,
      products: state.products,
      categories: state.categories,
      transactions: state.transactions,
    };
  },
};
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
<template>
  <div>
    <section class="w-10/12 mx-auto mt-6">
      <div class="mb-2">
        <h1 class="text-black text-lg font-bold">Transaction</h1>
      </div>
      <div class="bg-gray-100 p-3 flex hide-print">
        <Search />
      </div>
      <div class="mt-5 flex">
        <div
          class="border-b table-show w-full"
          style="font-size: 12px"
          ref="fullWidthTableElement"
        >
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <table class="min-w-full">
                  <thead class="border-b text-sm font-bold">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm text-gray-900 px-6 py-4 text-left"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        class="text-sm text-gray-900 px-6 py-4 text-left"
                      >
                        ReferenceID
                      </th>
                      <th
                        scope="col"
                        class="text-sm text-gray-900 px-6 py-4 text-left"
                      >
                        Product title
                      </th>
                      <th
                        scope="col"
                        class="text-sm text-gray-900 px-6 py-4 text-left"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        class="text-sm text-gray-900 px-6 py-4 text-left"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        class="text-sm text-gray-900 px-6 py-4 text-left"
                      >
                        Sub Total
                      </th>
                      <th
                        scope="col"
                        class="text-sm text-gray-900 px-6 py-4 text-left"
                      >
                        Total
                      </th>
                      <th
                        scope="col"
                        class="text-sm text-gray-900 px-6 py-4 text-left"
                      >
                        <icon :icon="['fa', 'edit']" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="bg-white border-b hover:bg-gray-100"
                      v-for="(transaction, index) in transactions"
                      :key="index"
                      @click="editProduct(transaction)"
                    >
                      <td
                        scope="col"
                        class="text-sm text-gray-900 px-6 py-4 text-left"
                      >
                        {{ index + 1 }}
                      </td>
                      <td
                        scope="col"
                        class="text-sm text-gray-900 px-6 py-4 text-left"
                      >
                        {{ transaction.referenceId }}
                      </td>
                      <td
                        scope="col"
                        class="text-sm text-gray-900 px-6 py-4 text-left"
                      >
                        {{ transaction.product.title }}
                      </td>
                      <td
                        scope="col"
                        class="text-sm text-gray-900 px-6 py-4 text-left"
                      >
                        &#8358; {{ transaction.product.price }}
                      </td>
                      <td
                        scope="col"
                        class="text-sm text-gray-900 px-6 py-4 text-left"
                      >
                        {{ transaction.quantity }}
                      </td>
                      <td
                        scope="col"
                        class="text-sm text-gray-900 px-6 py-4 text-left"
                      >
                        &#8358;
                        {{ transaction.product.price * transaction.quantity }}
                      </td>
                      <td
                        scope="col"
                        class="text-sm text-gray-900 px-6 py-4 text-left"
                      >
                        &#8358;
                        {{ transaction.product.price * transaction.quantity }}
                      </td>
                      <td
                        scope="col"
                        class="text-sm text-gray-900 px-6 py-4 text-left"
                      >
                        <button class="text-green-600 text-lg">
                          <icon :icon="['fa', 'edit']" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div
          class="pt-3 w-4/12 pl-3 pr-3 border hidden"
          ref="editProductElement"
        >
          <div>
            <button class="float-right text-5xl" @click="closeEditProduct">
              &times;
            </button>
          </div>
          <h1 class="text-2xl my-3 font-bold">
            <span v-if="singleTransaction">{{ singleTransaction.product.title }} </span>
          </h1>
          <hr class="pt-4" />
          <ul class="mt-3" style="font-size: 13px">
           <li class="py-1 flex justify-between" v-if="singleTransaction">
           <div>
              <label class="text-tiny">Reference ID</label>
              <h2>{{singleTransaction.referenceId}}</h2>
           </div>
            <div>
             <label class="text-tiny">Date Created </label>
             <h2>2022-05-09 10:00 PM</h2>
             </div>
           </li>
            <li class="py-1" v-if="singleTransaction">
              <label class="text-tiny">Price </label>
              <h2 class="text-md font-bold">
                {{
                  singleTransaction && "&#8358; " + singleTransaction.product.price
                }}
                X {{ singleTransaction && singleTransaction.quantity }}
              </h2>
            </li>
            <li class="py-1 flex justify-between">
              <div>
                <label class="text-tiny">Sub Total </label>
                <h2 class="text-xl">
                  {{
                    singleTransaction &&
                    "&#8358; " +
                      singleTransaction.product.price * singleTransaction.quantity
                  }}
                </h2>
              </div>
              <div>
                <label class="text-tiny">Total </label>
                <h2 class="text-xl">
                  {{
                    singleTransaction &&
                    "&#8358; " +
                      singleTransaction.product.price * singleTransaction.quantity
                  }}
                </h2>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
