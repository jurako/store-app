import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import specific icons */
import {
  faCartShopping,
  faBars,
  faXmark,
  faPlus,
  faMinus,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* add icons to the library */
library.add(faCartShopping, faBars, faXmark, faPlus, faMinus, faArrowLeft)
import BaseIcon from '@/components/BaseIcon.vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
axios.defaults.baseURL = 'https://fakestoreapi.com/'
// axios.defaults.baseURL = 'https://api.escuelajs.co/api/v1'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('FontAwesomeIcon', FontAwesomeIcon).component('BaseIcon', BaseIcon)

app.mount('#app')
