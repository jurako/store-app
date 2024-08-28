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
    </div>

    <CartItem
      v-for="(item, index) in cartItems"
      :key="item.id"
      :item="item"
      @add-quantity="addQuantity(index)"
      @sub-quantity="subQuantity(index)"
      @update-quantity="(value) => updateQuantity(value, index)"
    />
  </div>
</template>

<script>
import { mapWritableState } from 'pinia'
import { useCartStore } from '../stores/cart'

import CartItem from '../components/CartItem.vue'

export default {
  components: {
    CartItem
  },
  created() {
    console.log('cart', this.cartItems)
  },
  computed: {
    ...mapWritableState(useCartStore, { cartItems: 'items' })
  },
  methods: {
    addQuantity(index) {
      this.cartItems[index].quantity++
    },
    subQuantity(index) {
      this.cartItems[index].quantity--
    },
    updateQuantity(value, index) {
      //to trigger input element update in cases when the old and new values are equal
      this.cartItems[index].quantity = null;
      this.cartItems[index].quantity = value;
    }
  }
}
</script>
