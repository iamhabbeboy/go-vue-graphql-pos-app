<script>
import { ref, computed } from 'vue'
import Home from './pages/Home.vue'
import Inventory from './pages/Inventory.vue'
import Transaction from './pages/Transaction.vue'
import NotFound from './pages/404.vue'
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer
  },
  setup() {
    const routes = {
      '/': Home,
      '/inventory': Inventory,
       '/transaction': Transaction
    }

    const currentPath = ref(window.location.hash)

    window.addEventListener('hashchange', () => {
      currentPath.value = window.location.hash
    })

    const currentView = computed(() => {
      return routes[currentPath.value.slice(1) || '/'] || NotFound
    })
    return {
      currentView,
      routes
    }
  }
}
</script>

<template>
  <div>
    <NavBar />
    <component :is="currentView" />
    <Footer />
  </div>
</template>