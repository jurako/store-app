<template>
  <p class="text-center" v-if="$route.params.category">
    {{ $route.params.category }}
  </p>
  <!-- {{ $route.params.category_id ? 'Category id: ' + $route.params.category_id + ' list' : 'Products list' }} -->
  <ProductCard v-for="product in products" :key="product.id" :product="product" />
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
      category: {}
    }
  },
  created() {
    console.log('Hello from ProductList')
    this.fetchProducts()
  },
  methods: {
    fetchProducts() {
      let url = "/products?limit=10";

      if(this.$route.params.category) {
        url += "&category=" + this.$route.params.category;
      }

      axios.get(url).then((response) => {
        response.data.forEach((element) => {
          element.discount = Math.random() * (100 - 1) + 1
        })
        this.products = response.data
        console.log('this.products', this.products);
      })
    }
  }
}
</script>
