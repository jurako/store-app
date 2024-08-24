import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [
      {productId: 1, name: 'Product 1'},
      {productId: 2, name: 'Product 2'}
    ]
  })
});