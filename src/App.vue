<template>
  <HeaderView />
  <main class="flex flex-wrap justify-center items-center gap-8 mt-16 sm:mt-0 p-5">
    <RouterView />
  </main>
</template>

<script>
import HeaderView from './views/HeaderView.vue'

export default {
  components: {
    HeaderView
  },
  provide: {
    APICurrency: '$'
  }
}
</script>
