<template>
  <input
    type="radio"
    :id="value"
    :name="name"
    :value="value"
    :checked="value == modelValue"
    @change="() => $emit('update:modelValue')"
  />
  <label :for="value">{{ value }}</label>
</template>

<script setup>
defineProps({
  name: String,
  value: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  }
})
</script>
