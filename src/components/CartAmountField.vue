<template>
  <input
    class="rounded-md border-gray-200 sm:w-16"
    type="text"
    v-model.number="storeCart.items[index].quantity"
    @keydown="validateInput"
    @blur="checkIfEmpty"
  />
</template>

<script setup>
import { useCartStore } from '@/stores/cart'

const props = defineProps(['index'])
const storeCart = useCartStore()

function validateInput(event) {
  let isKeyboardShortcut = event.ctrlKey && ['a', 'z', 'x', 'c', 'v'].includes(event.key)
  let isNumber = /^\d+$/.test(event.key)
  if (event.key.length == 1 && !isNumber && !isKeyboardShortcut) {
    event.preventDefault()
  }
}

function checkIfEmpty(event) {
  if (!event.target.value) {
    storeCart.items[props.index].quantity = 1
  }
}
</script>
