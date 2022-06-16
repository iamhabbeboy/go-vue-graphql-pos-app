<template>
  <div class="text-3xl font-bold underline">Hello world</div>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  props: ["msg"],
  setup(props: any) {
    const count = ref(0);
    return {
      count,
    };
  },
};
</script>
