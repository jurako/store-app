<template>
  <div class="cart-item">
    <img class="h-96 w-full object-contain object-center" :src="item.image" :alt="item.title" />
    <p class="my-4 text-sm capitalize text-gray-500">{{ item.category }}</p>
    <h1 class="mb-4 text-sm">{{ item.title }}</h1>
    <div class="mb-4 flex items-center justify-center gap-x-3">
      <BaseIcon
        class="text-xl font-semibold text-tealish-blue hover:cursor-pointer"
        iconName="fa-plus"
        @click="addQuantity"
      />
      <input
        class="rounded-md border-gray-200"
        type="text"
        :value="item.quantity"
        @input="updateQuantity($event)"
      />
      <BaseIcon
        class="text-xl font-semibold text-tealish-blue hover:cursor-pointer"
        iconName="fa-minus"
        @click="subQuantity"
      />
    </div>
    <div class="flex items-center justify-between">
      <span>{{ APICurrency + ' ' + item.price.toFixed(2) }}</span>
      <BaseIcon icon="fa-xmark" @click="removeItem" />
    </div>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  components: { BaseIcon },
  props: ['item'],
  emits: ['addQuantity', 'subQuantity', 'updateQuantity'],
  inject: ['APICurrency'],
  methods: {
    addQuantity() {
      this.$emit('addQuantity')
    },
    subQuantity() {
      if (this.item.quantity > 1) this.$emit('subQuantity')
    },
    updateQuantity(event) {
      let validatedValue = Math.abs(parseInt(event.target.value))
      this.$emit('updateQuantity', validatedValue ? validatedValue : 1)
    },
    removeItem() {
      this.$emit('removeItem')
    }
  }
}
</script>
