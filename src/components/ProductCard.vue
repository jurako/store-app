<template>
  <div class="w-72 bg-white rounded-xl shadow duration-300 hover:scale-105">
    <img
      class="object-contain object-center w-4/5 h-80 mx-auto mt-4 rounded-t-xl"
      :src="imageSrc"
      alt="Product image"
    />
    <div class="space-y-4 p-4 pt-6">
      <p class="text-lg font-bold leading-6 truncate">{{ product.title }}</p>
      <p class="text-base truncate">{{ product.description }}</p>
      <div class="flex items-center">
        <p class="text-lg font-medium" v-if="!product.discount">{{ currency + price }}</p>
        <template v-else>
          <p class="mr-2 text-lg font-medium">{{ currency + priceWithDiscount }}</p>
          <p class="mr-auto text-gray-500 text-base line-through">{{ currency + price }}</p>
          <p class="text-green-500 font-semibold text-base">{{ discountLabel }}</p>
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
