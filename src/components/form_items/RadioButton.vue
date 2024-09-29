<template>
  <label>
    <input
      type="radio"
      class="-mt-px"
      :name="name"
      :value="value"
      :checked="value == modelValue"
      @change="() => $emit('update:modelValue')"
    />
    {{ value }}
  </label>
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
