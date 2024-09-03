<template>
  <header
    class="fixed left-0 right-0 top-0 flex min-h-16 min-w-72 items-center bg-celadon-light sm:static"
  >
    <div class="container mx-auto flex h-full items-center justify-between gap-x-28 px-8">
      <BaseIcon class="sm:hidden" iconName="fa-bars" @click="toggleSideMenu" />
      <RouterLink class="hidden sm:block" :to="{ name: 'home' }">
        <LogoSvg />
      </RouterLink>
      <nav
        class="categories hidden sm:flex sm:flex-wrap sm:justify-center sm:text-sm sm:uppercase md:text-base"
      >
        <RouterLink
          class="p-2 hover:bg-rose-quartz"
          activeClass="bg-rose-quartz"
          v-for="category in categories"
          :key="category"
          :to="{ name: 'product-list', params: { category_name: category } }"
        >
          {{ category }}
        </RouterLink>
      </nav>
      <nav>
        <RouterLink :to="{ name: 'cart' }">
          <BaseIcon iconName="fa-cart-shopping" />
        </RouterLink>
      </nav>
    </div>
    <SideMenu :categories="categories" :isVisible="showSideMenu" @toggle="toggleSideMenu" />
  </header>
</template>

<script setup>
import { ref } from 'vue'

import axios from 'axios'
import SideMenu from '@/components/SideMenu.vue'
import LogoSvg from '@/components/LogoSvg.vue'
import { useCartStore } from '@/stores/cart'

const storeCart = useCartStore()

let categories = ref([])
let showSideMenu = ref(false)

function fetchCategories() {
  axios.get('/products/categories').then((response) => {
    categories.value = response.data
  })
}

function toggleSideMenu() {
  showSideMenu.value = !showSideMenu.value
}

fetchCategories()
</script>
