<script lang="ts">
import NavBar from "./components/NavBar.vue";
import {ref} from "vue"
import useEvent from "./composable/useEvents";
import {Product} from "./types/Product";
import {useState} from "./store/store";

export default {
  components: {
    NavBar
  },
  setup() {
    const products = ref<Product[]>([{
      "title": "Soft Silicone back case for iphone 13",
      "price": 1200,
      "quantity": 10
    }, {
      "title": "iphone 13",
      "price": 1200,
      "quantity": 10
    }, {
      "title": "iphone 13",
      "price": 1200,
      "quantity": 10
    }, {
      "title": "iphone 13",
      "price": 1200,
      "quantity": 10
    },  {
      "title": "iphone 13",
      "price": 1200,
      "quantity": 10
    }, {
      "title": "iphone 13",
      "price": 1200,
      "quantity": 10
    }, {
      "title": "iphone 13",
      "price": 1200,
      "quantity": 10
    }]);
    const {state}: any = useState();

    const add = (product: any) => {
      useEvent.addToCart(product)
    }

    return {
      add,
      carts: state.carts,
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
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{index + 1}}</td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4">
                        {{cart.title}}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {{cart.quantity}}
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
                      <th >&#8358; 90,000</th>
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
          <!--          <div class="flex justify-between p-3" v-for="(cart, index) of carts" :key="index">-->
          <!--            <div class="w-3/12">{{cart.title}}</div>-->
          <!--            <div>{{cart.price}}</div>-->
          <!--            <div>{{cart.quantity}}</div>-->
          <!--            <div>120</div>-->
          <!--          </div>-->
        </div>
      </div>
    </div>
    <div class="p-10 bg-gray-100 mt-20">
      Designed by Bashlabs Innovation
    </div>
  </section>
</template>
