import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
      user: {},
      isAuthenticated: false
    }),
    getters: {
      fullName: (state) => state.user.name + ' ' + state.user.surname
    }
});