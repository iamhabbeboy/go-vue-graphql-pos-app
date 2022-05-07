<script lang="ts">
import Search from "../components/Search.vue";
import Footer from "../components/Footer.vue";
import Product from "../types/Product"
import {createStore, useState} from "../store/store"
import {ref} from "vue"

export default {
    components: {
        Search,
        Footer
    },
    setup() {
        const {state} = useState();
        const singleProduct = ref<Product>();
        const editProductElement = ref();
        const fullWidthTableElement = ref()

        const editProduct = (product: Product) => {
            editProductElement.value.classList.remove('hidden')
            fullWidthTableElement.value.classList.remove('w-full')
            singleProduct.value = product;
        }

        const closeEditProduct = () => {
            editProductElement.value.classList.add('hidden')
            fullWidthTableElement.value.classList.add('w-full')
        }

        return {
            editProduct,
            singleProduct,
            closeEditProduct,
            editProductElement,
            fullWidthTableElement,
            products: state.products
        }
    },
}
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
    <div class="hide-print">
    </div>
    <section class="w-10/12 mx-auto mt-6">
      <div class="bg-gray-100 p-3 flex hide-print">
        <Search />
      </div>
      <div class="mt-5 flex">
            <div class="border-b table-show w-full" style="font-size:12px;" ref="fullWidthTableElement">
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <table class="min-w-full">
              <thead class="border-b text-sm font-bold ">
              <tr>
                <th scope="col" class="text-sm text-gray-900 px-6 py-4 text-left">
                  #
                </th>
                 <th scope="col" class="text-sm text-gray-900 px-6 py-4 text-left">
                  Image
                </th>
                <th scope="col" class="text-sm text-gray-900 px-6 py-4 text-left">
                  Title
                </th>
                <th scope="col" class="text-sm text-gray-900 px-6 py-4 text-left">
                  In stock
                </th>
                <th scope="col" class="text-sm text-gray-900 px-6 py-4 text-left">
                  Sold
                </th>
                <th scope="col" class="text-sm text-gray-900 px-6 py-4 text-left">
                  Price
                </th>
                <th scope="col" class="text-sm text-gray-900 px-6 py-4 text-left">
                  SKU
                </th>
                <th scope="col" class="text-sm text-gray-900 px-6 py-4 text-left">
                  <icon :icon="['fa', 'edit']" />
                </th>
              </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b hover:bg-gray-100" v-for="(product, index) in products" :key="index" @click="editProduct(product)">
                <td scope="col" class="text-sm text-gray-900 px-6 py-4 text-left">
                  {{ index + 1}}
                </td>
                 <td scope="col" class="text-sm text-gray-900 px-6 py-4 text-left">
                      <img src="../assets/product.webp" class="w-12"/>
                </td>
                <td scope="col" class="text-sm text-gray-900 px-6 py-4 text-left">
                  {{ product.title }}
                </td>
                <td scope="col" class="text-sm text-gray-900 px-6 py-4 text-left">
                  10
                </td>
                <td scope="col" class="text-sm text-gray-900 px-6 py-4 text-left">
                  2
                </td>
                <td scope="col" class="text-sm text-gray-900 px-6 py-4 text-left">
                 &#8358; {{ product.price }}
                </td>
                <td scope="col" class="text-sm text-gray-900 px-6 py-4 text-left">
                  SP101
                </td>
                <td scope="col" class="text-sm text-gray-900 px-6 py-4 text-left">
                  <button class="text-green-600 text-lg"><icon :icon="['fa', 'edit']" /></button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
      <div class="pt-3 w-4/12 pl-3 pr-3 border hidden" ref="editProductElement">
        <div>
            <button class="float-right text-5xl" @click="closeEditProduct">&times;</button>
        </div>
        <img src="../assets/product.webp" class="w-32" />
        <input type="file" />
        <ul class="mt-3">
            <li>
                <label class="text-tiny">Title </label>
                <input type="text" class="border rounded-md p-2 block w-full" :value="singleProduct ? singleProduct.title : ''"  />
            </li>
            <li>
                <label class="text-tiny">Price </label>
                <input type="text" class="border rounded-md p-2 block w-full" :value="singleProduct ? singleProduct.price : ''" />
            </li>
            <li>
                <label class="text-tiny">In stock </label>
                <input type="number" class="border rounded-md p-2 block w-full" :value="singleProduct ? singleProduct.stock : ''" />
            </li>
            <li>
                <label class="text-tiny">SKU </label>
                <input type="text" class="border rounded-md p-2 block w-full" :value="singleProduct ? singleProduct.sku : ''" />
            </li>
            <li class="flex justify-between">
                <button class="bg-blue-400 p-2 rounded-md text-white px-5 mt-3 w-full" @click="filterProduct">Submit <icon :icon="['fas', 'check-circle']" /> </button>
                <button class="bg-red-400 p-2 rounded-md text-white px-5 mt-3 w-full" @click="deleteProduct">Delete <icon :icon="['fa', 'times-circle']" /> </button>
            </li>
        </ul>
      </div>
      </div>
      <Footer />
    </section>
  </div>
</template>