<template>
  <div class="w-72 rounded-xl bg-white shadow duration-300 hover:scale-105">
    <img
      class="mx-auto mt-4 h-80 w-4/5 rounded-t-xl object-contain object-center"
      :src="imageSrc"
      alt="Product image"
    />
    <div class="space-y-4 p-4 pt-6">
      <h1 class="truncate text-lg font-bold leading-6">{{ product.title }}</h1>
      <p class="truncate text-base">{{ product.description }}</p>
      <div class="flex items-center">
        <p class="text-lg font-medium" v-if="!product.discount">{{ currency + price }}</p>
        <template v-else>
          <p class="mr-2 text-lg font-medium">{{ currency + priceWithDiscount }}</p>
          <p class="mr-auto text-base text-gray-500 line-through">{{ currency + price }}</p>
          <p class="text-base font-semibold text-green-500">{{ discountLabel }}</p>
        </template>
      </div>
      <div class="flex justify-between"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  },
  inject: {
    currency: {
      from: 'APICurrency'
    }
  },
  computed: {
    imageSrc() {
      //TO DO: return a default image if product has noone
      // return this.product.images.length ? this.product.images.pop() : //default image

      //https://api.escuelajs.co/
      // return this.product.images[this.product.image.length-1]

      //https://fakestoreapi.com/
      return this.product.image
    },
    price() {
      return this.product.price.toFixed(2)
    },
    priceWithDiscount() {
      return (this.product.price - (this.product.price * this.product.discount) / 100).toFixed(2)
    },
    discountLabel() {
      return this.product.discount.toFixed(2) + '% off'
    }
  }
}
</script>
