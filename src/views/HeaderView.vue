<template>
  <header
    class="min-w-72 min-h-16 flex items-center fixed top-0 left-0 right-0 sm:static z-10 bg-celadon-light"
  >
    <div class="flex justify-between items-center gap-x-28 container mx-auto px-8 h-full">
      <BaseIcon class="sm:hidden" iconName="fa-bars" @click="toggleSideMenu" />
      <RouterLink class="hidden sm:block" to="/">
        <svg
          id="logo-85"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="ccustom"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 0C15.5228 0 20 4.47715 20 10V0H30C35.5228 0 40 4.47715 40 10C40 15.5228 35.5228 20 30 20C35.5228 20 40 24.4772 40 30C40 32.7423 38.8961 35.2268 37.1085 37.0334L37.0711 37.0711L37.0379 37.1041C35.2309 38.8943 32.7446 40 30 40C27.2741 40 24.8029 38.9093 22.999 37.1405C22.9756 37.1175 22.9522 37.0943 22.9289 37.0711C22.907 37.0492 22.8852 37.0272 22.8635 37.0051C21.0924 35.2009 20 32.728 20 30C20 35.5228 15.5228 40 10 40C4.47715 40 0 35.5228 0 30V20H10C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM18 10C18 14.4183 14.4183 18 10 18V2C14.4183 2 18 5.58172 18 10ZM38 30C38 25.5817 34.4183 22 30 22C25.5817 22 22 25.5817 22 30H38ZM2 22V30C2 34.4183 5.58172 38 10 38C14.4183 38 18 34.4183 18 30V22H2ZM22 18V2L30 2C34.4183 2 38 5.58172 38 10C38 14.4183 34.4183 18 30 18H22Z"
            fill="#627264"
          ></path>
        </svg>
      </RouterLink>
      <nav
        class="categories hidden sm:flex sm:flex-wrap sm:justify-center sm:uppercase sm:text-sm md:text-base"
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
        <RouterLink to="/cart">
          <BaseIcon iconName="fa-cart-shopping" />
        </RouterLink>
      </nav>
    </div>
    <SideMenu :categories="categories" :isVisible="showSideMenu" @toggle="toggleSideMenu" />
  </header>
</template>

<script>
import axios from 'axios'
import BaseIcon from '../components/BaseIcon.vue'
import SideMenu from '../components/SideMenu.vue'

export default {
  components: { BaseIcon, SideMenu },
  data() {
    return {
      categories: [],
      showSideMenu: false
    }
  },
  created() {
    this.fetchCategories()
  },
  methods: {
    fetchCategories() {
      axios.get('/products/categories').then((response) => {
        this.categories = response.data
      })
    },
    toggleSideMenu() {
      this.showSideMenu = !this.showSideMenu
    }
  }
}
</script>
