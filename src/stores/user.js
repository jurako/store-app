import { axiosBackend } from '@/config/axios'
import { defineStore } from 'pinia'

const persistedData = {
  user: JSON.parse(localStorage.getItem('user')),
  isAuth: localStorage.getItem('isAuth')
}

export const useUserStore = defineStore('user', {
  state: () => ({
    user: persistedData.user ?? {},
    isAuthenticated: persistedData.isAuth ?? false
  }),
  getters: {
    fullName: (state) => state.user.name + ' ' + state.user.surname
  },
  actions: {
    logout() {
      axiosBackend.post('/logout').then((data) => {
        this.user = {}
        this.isAuthenticated = false

        localStorage.removeItem('user')
        localStorage.removeItem('isAuth')

        this.router.push({ name: 'home' })
      })
    }
  }
})
