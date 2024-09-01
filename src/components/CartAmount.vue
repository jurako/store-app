<template>
  <input
    class="rounded-md border-gray-200 sm:w-16"
    type="text"
    v-model="storeCart.items[index].quantity"
    @keydown="validateInput"
  />
</template>

<script setup>
import { useCartStore } from '@/stores/cart'

defineProps(['index'])
const storeCart = useCartStore()

function validateInput(event) {
  console.log('test 1', event.key)
  let isKeyboardShortcut = event.ctrlKey && ['a', 'c', 'v'].includes(event.key)
  console.log('test 2', event.ctrlKey)
  console.log('test 3', event.key)
  console.log('test 4', event.key.length)
  console.log('test 5', isKeyboardShortcut)
  console.log('test 6', Number(event.key))
  console.log('test 7', Math.abs(Number(event.key)))
  console.log('test 8', isNaN(Math.abs(Number(event.key))))
  if (!isKeyboardShortcut && event.key.length == 1 && isNaN(Math.abs(Number(event.key)))) {
    console.log('Event prevented')
    event.preventDefault()
  }
  console.log('--------------------------------------------------------')
}
</script>
