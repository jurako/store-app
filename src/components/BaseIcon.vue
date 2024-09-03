<template>
  <FontAwesomeIcon
    class="block transition-transform hover:scale-110 hover:cursor-pointer"
    :style="{ color }"
    :icon="'fa-solid ' + iconName"
    :size="size"
  />
</template>

<script setup>
defineProps({
  iconName: String,
  size: {
    type: String,
    default: 'lg'
  },
  color: {
    type: String,
    default: '#627264'
  }
})
</script>
