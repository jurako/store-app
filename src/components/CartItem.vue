<template>
  <div
    class="flex-column cart-item mb-5 border-t-2 border-t-gray-200 pt-3 sm:flex sm:items-center sm:gap-x-8"
  >
    <img
      class="h-96 w-full object-contain object-center sm:h-28 sm:w-16"
      :src="item.image"
      :alt="item.title"
    />
    <div class="sm:w-1/4">
      <p class="my-4 text-sm capitalize text-gray-500">{{ item.category }}</p>
      <h1 class="mb-4 text-sm">{{ item.title }}</h1>
    </div>
    <div class="mb-4 flex items-center justify-center gap-x-3 sm:mb-0">
      <BaseIcon
        class="text-xl font-semibold text-tealish-blue hover:cursor-pointer"
        iconName="fa-plus"
        @click="addQuantity"
      />
      <!-- <CartAmount/> -->
      <BaseIcon
        class="text-xl font-semibold text-tealish-blue hover:cursor-pointer"
        iconName="fa-minus"
        @click="subQuantity"
      />
    </div>
    <div class="flex items-center justify-between sm:flex-grow">
      <span>{{ APICurrency + ' ' + item.price.toFixed(2) }}</span>
      <BaseIcon icon="fa-xmark" @click="removeItem" />
    </div>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'
import CartAmount from './CartAmount.vue'

export default {
  components: { BaseIcon, CartAmount },
  props: ['item'],
  emits: ['addQuantity', 'subQuantity', 'removeItem'],
  inject: ['APICurrency'],
  methods: {
    addQuantity() {
      this.$emit('addQuantity')
    },
    subQuantity() {
      if (this.item.quantity > 1) this.$emit('subQuantity')
    },
    removeItem() {
      this.$emit('removeItem')
    },

  }
}
</script>
