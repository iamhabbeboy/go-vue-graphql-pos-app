<script lang="ts">
import {useState} from "../store/store";
import useEvent from "../composable/useEvents";
import Cart from "./Cart.vue";
import {watchEffect, ref, onMounted} from "vue";

export default {
  components: {
    Cart,
  },
  setup() {
    const {state}: any = useState();
    const subTotal = ref<number>(0)
    const total = ref(0);

    watchEffect(() => {
      subTotal.value = state.carts.reduce((cart: any, item:{sub_total: number}) => cart + item.sub_total, 0);
    })

    const print = () => {
      window.print();
    }

    const clearCart = () => {
      if(confirm('Are you sure ?')) {
        useEvent.clearCart(state);
      }
    }

    return {
      print,
      carts: state.carts,
      clearCart,
      subTotal
    }
  }
}
</script>
<template>
  <div class="border-l w-4/12">
    <div class="font-bold bg-gray-100 p-4 flex justify-between hide-print">
      Checkout
      <button class="bg-red-700 text-white px-3 rounded-md text-sm font-bold cursor hover:bg-red-600" style="font-size: 12px"
      @click.prevent="clearCart">
        Clear cart &times;</button>
    </div>
    <div class="border-b table-show" style="font-size:12px;">
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
            <div class="overflow-hidden print" style="height: 400px;overflow: scroll">
              <Cart :cart="carts"/>
            </div>
            <div>
              <table class="min-w-full">
                <tbody>
                <tr class="border-t">
                  <th colspan="2">&nbsp;</th>
                  <th >&nbsp;</th>
                  <th colspan="2" class="">Discount</th>
                  <th>&#8358; 0.0%</th>
                </tr>
                <tr>
                  <th colspan="3">&nbsp;</th>
                  <th colspan="2">Sub total</th>
                  <th>&#8358; {{subTotal}}</th>
                </tr>
                <tr>
                  <th colspan="4"> &nbsp;</th>
                </tr>
                <tr>
                  <th>
                    <button class="rounded-md bg-green-600 text-white p-3 shadow-md hover:bg-green-500 font-bold" @click="print">Pay-in &amp; print </button>
                  </th>
                  <th colspan="3">
                    <h4>Total</h4>
                    <h1 class="text-xl text-right">&#8358; {{subTotal}}</h1>
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

<style>
/* @media print {
   .table-show {
    background: orange !important;
    width: 100%;
  }
} */
</style>