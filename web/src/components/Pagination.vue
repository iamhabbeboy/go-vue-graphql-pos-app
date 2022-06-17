<template>
  <div class="mt-10">
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
          <!-- @click="() => gotoPage(item)" -->
          <button
            v-for="item in Math.ceil(data.length / perPage)"
            :key="item"
            :class="`${item == page ? 'text-white bg-blue-500 hover:bg-blue-400': 'hover:bg-blue-100 hover:text-gray-700'} py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300`"
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
  </div>
</template>
<script lang="ts">
export default {
  props: {
    data: {
      type: Number,
    },
    perPage: {
      type: Number
    },
    backPage: {
      type: Function
    },
    gotoPage: {
      type: Function
    },
    nextPage: {
      type: Function
    },
    page: {
      type: Number
    }
  },
  setup(props: any) {
    return {
      page: props.page,
      backPage: props.backPage,
      perPage: props.perPage,
      data: props.data,
      // gotoPage: props.gotoPage,
      nextPage: props.nextPage
    };
  },
};
</script>
