<template>
  <div class="cart-item">
    <img class="h-96 w-full object-contain object-center" :src="item.image" :alt="item.title" />
    <div class="space-y-2 my-4">
      <p class="text-sm capitalize text-gray-500">{{ item.category }}</p>
      <p class="text-sm">{{ item.title }}</p>
    </div>
    <div class="flex justify-center items-center gap-x-3 mb-4">
      <BaseIcon class="text-xl font-semibold text-tealish-blue hover:cursor-pointer" iconName="fa-plus" @click="addQuantity" />
      <input
        class="border-gray-200 rounded-md"
        type="text"
        :value="item.quantity"
        @input="updateQuantity($event)"
      />
      <BaseIcon class="text-xl font-semibold text-tealish-blue hover:cursor-pointer" iconName="fa-minus" @click="subQuantity" />
    </div>
    <div class="flex justify-between">
      <span>{{ APICurrency + ' ' + item.price.toFixed(2) }}</span>
      <button></button>
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
    }
  }
}
</script>
