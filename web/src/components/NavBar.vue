<template>
<section class="bg-gray-100 p-3 text-gray-700 shadow-md">
  <div class="w-10/12 mx-auto flex text-mx font-bold justify-between">
    <div>
      <img src="/logo.png" width="30" height="30" alt="Vite POS Logo"/>
    </div>
    <div>
      <nav class="py-3">
        <ul class="flex">
          <li class="mr-6">
            <router-link to="/sale">Sale</router-link>
          </li>
          <li class="mr-6">
            <router-link to="/inventory">Inventory</router-link>
          </li>
          <li class="mr-6">
             <router-link to="/transaction">Transaction</router-link>
          </li>
          <li class="mr-6">
            <router-link to="/setting">Setting</router-link>
          </li>
          <li class="mr-6">
            <router-link to="/">Logout</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>