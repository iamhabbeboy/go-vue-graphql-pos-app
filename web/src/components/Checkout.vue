<script lang="ts">
import {useState} from "../store/store";
import useEvent from "../composable/useEvents";
import Cart from "./Cart.vue";

export default {
  components: {
    Cart,
  },
  setup() {
    const {state}: any = useState();

    const clearCart = () => {
      if(confirm('Are you sure ?')) {
        useEvent.clearCart(state);
      }
    }

    return {
      carts: state.carts,
      clearCart
    }
  }
}
</script>
<template>
  <div class="border-l w-4/12">
    <div class="font-bold bg-gray-100 p-4 flex justify-between">
      Checkout
      <button class="bg-red-700 text-white px-3 rounded-md text-sm font-bold cursor hover:bg-red-600" style="font-size: 12px"
      @click.prevent="clearCart">
        Clear cart &times;</button>
    </div>
    <div class="border-b" style="font-size:12px;">
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
                  Title
                </th>
                <th scope="col" class="text-sm text-gray-900 px-6 py-4 text-left">
                  Qty
                </th>
                <th scope="col" class="text-sm text-gray-900 px-6 py-4 text-left">
                  Total
                </th>
                <th scope="col" class="text-sm text-gray-900 px-6 py-4 text-left">
                  <icon :icon="['fa', 'edit']" />
                </th>
              </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
            <div class="overflow-hidden" style="height: 400px;overflow: scroll">
              <Cart :cart="carts"/>
            </div>
            <div>
              <table class="min-w-full">
                <tbody>
                <tr class="border-t">
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
                  <th colspan="3">
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