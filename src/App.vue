<template>
  <div class="flex items-center justify-center px-5 h-screen">
    <ProductCardVue v-for="product in products" :key="product.id" :product="product" :currency="APICurrency" />
  </div>
</template>

<script>
import axios from 'axios'
import ProductCardVue from './components/ProductCard.vue'

export default {
  components: {
    ProductCardVue
  },
  data() {
    return {
      products: [],
      APICurrency: '$'
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      axios.get('/products/23').then((response) => {
        response.data.discount = 20;
        this.products.push(response.data);
      })
    }
  }
}
</script>

<style scoped></style>
