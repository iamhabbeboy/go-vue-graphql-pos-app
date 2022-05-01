<script lang="ts">
import {useState, createStore} from "../store/store";
import {ref} from "vue";
import useEvents from "../composable/useEvents";

export default {
  setup() {
    const {state}: any = useState();
    const {getCategory} = createStore();
    const search = ref();
    const category = ref();
    getCategory();

    const filterProduct = () => {
      useEvents.search(search.value, category.value)
    }

    return {
      search,
      filterProduct,
      categories: state.categories
    }
  }
}
</script>
<template>
  <input type="text" class="border rounded-md p-2" placeholder="Search..." ref="search" />
  <select class="border rounded-md p-3 w-100 ml-2" ref="category">
    <option>select</option>
    <option v-for="(category, index) of categories" :key="index" :value="category">{{category}}</option>
  </select>
  <button class="ml-2 bg-blue-400 p-2 rounded-md text-white px-5" @click="filterProduct">Submit <icon :icon="['fa', 'search']" /> </button>
</template>

