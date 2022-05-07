<script>
import { ref, computed } from 'vue'
import Home from './pages/Home.vue'
import Inventory from './pages/Inventory.vue'
import NotFound from './pages/404.vue'
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  setup() {
    const routes = {
      '/': Home,
      '/inventory': Inventory
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
  </div>
</template>