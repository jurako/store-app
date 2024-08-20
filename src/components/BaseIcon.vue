<template>
  <FontAwesomeIcon
    class="block transition-transform hover:scale-110 hover:cursor-pointer"
    :style="{ color: '#627264' }"
    :icon="['fa-solid', iconName].join(' ')"
    :size="size"
  />
</template>

<script>
export default {
  props: {
    iconName: String,
    size: {
      type: String,
      default: 'lg'
    }
  }
}
</script>
