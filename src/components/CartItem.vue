<template>
  <div
    class="flex-column cart-item mb-5 border-t-2 border-t-gray-200 pt-3 sm:flex sm:items-center sm:gap-x-8"
  >
    <img
      class="h-96 w-full object-contain object-center sm:h-28 sm:w-16"
      :src="storeCart.items[index].image"
      :alt="storeCart.items[index].title"
    />
    <div class="sm:w-1/4">
      <p class="my-4 text-sm capitalize text-gray-500">{{ storeCart.items[index].category }}</p>
      <h1 class="mb-4 text-sm">{{ storeCart.items[index].title }}</h1>
    </div>
    <div class="mb-4 flex items-center justify-center gap-x-3 sm:mb-0">
      <BaseIcon
        class="text-xl font-semibold text-tealish-blue hover:cursor-pointer"
        iconName="fa-plus"
        @click="storeCart.addQuantity(index)"
      />
      <AmountField v-model="storeCart.items[index].quantity" />
      <BaseIcon
        class="text-xl font-semibold text-tealish-blue hover:cursor-pointer"
        iconName="fa-minus"
        @click="storeCart.subQuantity(index)"
      />
    </div>
    <div class="flex items-center justify-between sm:flex-grow">
      <span>{{ APICurrency + ' ' + storeCart.items[index].price.toFixed(2) }}</span>
      <BaseIcon icon="fa-xmark" @click="storeCart.remove(index)" />
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import { useCartStore } from '@/stores/cart'

import BaseIcon from '@/components/BaseIcon.vue'
import AmountField from '@/components/AmountField.vue'

const APICurrency = inject('APICurrency')
const storeCart = useCartStore()
defineProps(['index'])
</script>
