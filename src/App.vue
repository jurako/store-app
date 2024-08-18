<template>
  <HeaderView />
  <main class="flex flex-wrap justify-center items-center gap-8 p-5 h-screen">
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
