<template>
  <ProductCard
    v-for="product in products"
    :key="product.id"
    :product="product"
    :currency="APICurrency"
  />
</template>

<script>

import ProductCard from '../components/ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  inject: ['products', 'APICurrency']
}
</script>
