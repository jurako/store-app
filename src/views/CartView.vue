<template>
  <div class="cart w-96 rounded-xl border bg-white p-8 shadow sm:w-full">
    <div class="mb-4 flex flex-wrap items-center justify-between gap-y-4">
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
      v-model="item.quantity"
      @add-quantity="addQuantity(index)"
      @sub-quantity="subQuantity(index)"
      @remove-item="removeItem(index)"
    />

    <hr class="border-t-2 border-gray-200" />

    <RouterLink class="mt-4 inline-block hover:underline" :to="{ name: 'home' }"
      ><BaseIcon class="mr-1 inline-block" icon="fa-arrow-left" size="sm" /> Back to
      shop</RouterLink
    >
  </div>
</template>

<script>
import { mapWritableState } from 'pinia'
import { useCartStore } from '../stores/cart'

import CartItem from '../components/CartItem.vue'
import BaseIcon from '../components/BaseIcon.vue'

export default {
  components: {
    CartItem,
    BaseIcon
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
    removeItem(index) {
      this.cartItems.splice(index, 1)
    }
  }
}
</script>
