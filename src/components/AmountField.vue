<template>
  <input
    class="rounded-md border-gray-200 sm:w-16"
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    @keydown="validateInput"
    @blur="checkIfEmpty"
  />
</template>

<script setup>

const emit = defineEmits(['update:modelValue'])
const props = defineProps(['modelValue'])

function validateInput(event) {
  let isKeyboardShortcut = event.ctrlKey && ['a', 'z', 'x', 'c', 'v'].includes(event.key)
  let isNumber = /^\d+$/.test(event.key)
  if (event.key.length == 1 && !isNumber && !isKeyboardShortcut) {
    event.preventDefault()
  }
}

function checkIfEmpty(event) {
  if (!event.target.value) {
    emit('update:modelValue', 1);
  }
}
</script>
