<script lang="ts">
import {useState} from "../store/store";

export default {
  setup() {
    const {state}: any = useState();
    return {
      carts: state.carts,
    }
  }
}
</script>
<template>
  <div class="border-l w-3/12">
    <div class="text-center font-bold bg-gray-100 p-4">Checkout</div>
    <div class="border-b" style="font-size:12px">
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="border-b text-sm font-bold ">
                  <tr>
                    <th scope="col" class="text-sm text-gray-900 px-6 py-4 text-left">
                      #
                    </th>
                    <th scope="col" class="text-sm text-gray-900 px-6 py-4 text-left">
                      Title
                    </th>
                    <th scope="col" class="text-sm text-gray-900 px-6 py-4 text-left">
                      Qty
                    </th>
                    <th scope="col" class="text-sm text-gray-900 px-6 py-4 text-left">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                <tr class="bg-white border-b" v-for="(cart, index) of carts" :key="index">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ index + 1 }}</td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4">
                    {{ cart.title }}
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {{ cart.quantity }}
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    10
                  </td>
                </tr>
                <tr class="border-b">
                  <th colspan="3" class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">&nbsp;</th>
                </tr>
                <tr>
                  <th colspan="3">&nbsp;</th>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <th colspan="2" class="">Discount</th>
                  <th>&#8358; 0.0%</th>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <th colspan="2">Sub total</th>
                  <th>&#8358; 90,000</th>
                </tr>
                <tr>
                  <th colspan="3"> &nbsp;</th>
                </tr>
                <tr>
                  <th colspan="2">&nbsp;</th>
                  <th colspan="2">
                    <h4>Total</h4>
                    <h1 class="text-xl text-right">&#8358; 95,000</h1>
                  </th>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>