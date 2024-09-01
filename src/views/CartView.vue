<template>
  <div class="cart w-96 rounded-xl border bg-white p-8 shadow sm:w-full">
    <div class="mb-4 flex flex-wrap items-center justify-between gap-y-4">
      <h1 class="text-3xl font-bold">Shopping cart</h1>
      <span class="font-semibold text-gray-500">{{ storeCart.items.length }} items</span>
      <div class="w-full">
        Sort by:
        <select class="border-0">
          <option value="price">price</option>
          <option value="amount">amount</option>
        </select>
      </div>
    </div>

    <CartItem v-for="(item, index) in storeCart.items" :key="item.id" :index="index" />

    <hr class="border-t-2 border-gray-200" />

    <RouterLink class="mt-4 inline-block hover:underline" :to="{ name: 'home' }"
      ><BaseIcon class="mr-1 inline-block" icon="fa-arrow-left" size="sm" /> Back to
      shop</RouterLink
    >
  </div>
</template>

<script setup>
import CartItem from '@/components/CartItem.vue'
import BaseIcon from '@/components/BaseIcon.vue'

import { useCartStore } from '@/stores/cart'
const storeCart = useCartStore()
</script>
