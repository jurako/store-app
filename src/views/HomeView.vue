<template>
  <ProductCard
    v-for="product in products"
    :key="product.id"
    :product="product"
  />
</template>

<script>
import axios from 'axios'
import ProductCard from '../components/ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      products: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      axios.get('/products?offset=0&limit=10').then((response) => {
        response.data.forEach((element) => {
          element.discount = Math.random() * (100 - 1) + 1
        })
        this.products = response.data
      })
    }
  }
}
</script>
