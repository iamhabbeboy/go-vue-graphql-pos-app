<script lang="ts">
import {useState} from "../store/store";

export default {
  setup() {
    const {state}: any = useState();
    return {
      categories: state.categories
    }
  }
}
</script>
<template>
  <input type="text" class="border rounded-md p-2" placeholder="Search..."/>
  <select class="border rounded-md p-3 w-100 ml-2">
    <option>select</option>
    <option v-for="(category, index) of categories" :key="index" :value="category.title">{{category.title}}</option>
  </select>
  <button class="ml-2 bg-blue-400 p-2 rounded-md text-white px-5">Submit <icon :icon="['fa', 'search']" /> </button>
</template>

