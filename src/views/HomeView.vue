<template>
  <ProductCard
    v-for="product in products"
    :key="product.id"
    :product="product"
    :currency="APICurrency"
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
      products: [],
      APICurrency: '$'
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      axios.get('/products?offset=0&limit=10').then((response) => {
        console.log(response.data)
        response.data.forEach((element) => {
          element.discount = Math.random() * (100 - 1) + 1
        })
        // response.data.discount = 20;
        console.log(response.data)
        this.products = response.data
      })
    }
  }
}
</script>
