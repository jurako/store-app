<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      msg: 'Hello World'
    }
  },
  mounted() {
    this.test()
  },
  methods: {
    async test() {
      axios.get('products').then((response) => {
        console.log('data', response.data)
      })
      // let data = await fetch('products')
      // console.log('data', data)
    }
  }
}
</script>

<style scoped></style>
