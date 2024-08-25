<template>
  <div class="w-96 p-8 border rounded-xl bg-white shadow">
    <div class="flex flex-wrap justify-between items-center gap-y-4 mb-4">
      <h1 class="text-3xl font-bold">Shopping cart</h1>
      <span class="font-semibold text-gray-500">{{ this.cartItems.length }} items</span>
      <div class="w-full">
        Sort by:
        <select class="border-0">
          <option value="price">price</option>
          <option value="amount">amount</option>
        </select>
      </div>
      <!-- <button class='bg-cyan-300 p-4' @click="this.cartItems.push({ productId: this.cartItems.length + 1, name: 'Product ' + (this.cartItems.length + 1)})">Add to cart</button> -->
    </div>

    <CartItem v-for="item in cartItems" :key="item.id" :item="item" />
  </div>
</template>

<script>
import { mapState } from 'pinia';
import { useCartStore } from '../stores/cart';

import CartItem from '../components/CartItem.vue';

export default {
  components: {
    CartItem
  },
  created() {
    console.log('cart', this.cartItems)
  },
  computed: {
    ...mapState(useCartStore, {cartItems: 'items'})
  }
}
</script>