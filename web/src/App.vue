<script lang="ts">
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
  props: {
    hideGlobalComponent: {
      type: Boolean
    }
  },
};
</script>

<template>
  <div>
    <NavBar v-if="!$route.meta.hideGlobalComponent"/>
      <router-view></router-view>
    <Footer v-if="!$route.meta.hideGlobalComponent" />
  </div>
</template>
