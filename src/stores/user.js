import { defineStore } from 'pinia'

const persistedData = {
  user: JSON.parse(localStorage.getItem('user')),
  isAuth: localStorage.getItem('isAuth'),
}

export const useUserStore = defineStore('user', {
    state: () => ({
      user: persistedData.user ?? {},
      isAuthenticated: persistedData.isAuth ?? false
    }),
    getters: {
      fullName: (state) => state.user.name + ' ' + state.user.surname
    }
});