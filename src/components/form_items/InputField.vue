<template>
    <input type="text"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      
      :placeholder="placeholder"/>
</template>

<script setup>

const emit = defineEmits(['update:modelValue']);
const props = defineProps(['modelValue', 'placeholder']);

</script>