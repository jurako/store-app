<template>
  <img
    class="h-96 w-full object-contain object-center"
    :src="item.image"
    :alt="item.title"
  />
  <div class="space-y-2 my-4">
    <p class="text-sm capitalize text-gray-500">{{ item.category }}</p>
    <p class="text-sm">{{ item.title }}</p>
  </div>
  <div class="flex justify-center items-center gap-x-3">
    <button class="text-xl font-semibold text-tealish-blue hover:cursor-pointer" @click="addQuantity"
      >+</button
    >
    <input
      class="border-gray-200 rounded-md"
      type="text"
      :value="item.quantity"
      @input="updateQuantity($event)"
    />
    <button class="text-xl font-semibold text-tealish-blue hover:cursor-pointer" @click="subQuantity"
      >-</button
    >
  </div>
</template>

<script>
export default {
  props: ['item'],
  emits: ['addQuantity', 'subQuantity', 'updateQuantity'],
  methods: {
    addQuantity() {
      this.$emit('addQuantity')
    },
    subQuantity() {
      if (this.item.quantity > 1) this.$emit('subQuantity')
    },
    updateQuantity(event) {
      let validatedValue = Math.abs(parseInt(event.target.value));
      this.$emit('updateQuantity', validatedValue ? validatedValue : 1);
    }
  }
}
</script>
