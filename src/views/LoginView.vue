<template>
  <div class="w-96 rounded-xl border bg-white p-8 shadow sm:w-auto sm:max-w-screen-sm sm:flex-grow">
    <h1 class="text-center text-3xl font-bold text-neutral-600">Sign in</h1>
    <section class="mb-7 mt-11 flex flex-col items-center gap-y-5">
      <InputField
        class="w-full sm:w-1/2"
        :class="[errors.email ? errorClasses : '']"
        v-model="email"
        placeholder="Email"
        ref="emailInput"
      />
      <InputField
        class="w-full sm:w-1/2"
        :class="[errors.password ? errorClasses : '']"
        inputType="password"
        v-model="password"
        placeholder="Password"
        ref="passwordInput"
      />
      <p
        class="w-full rounded-2xl bg-red-300 p-2 text-center font-semibold text-red-700 sm:w-1/2"
        v-show="errors.email || errors.password"
      >
        {{ errors.email ? errors.email : errors.password }}
      </p>
      <BaseButton class="w-full sm:w-1/2" @click="submit">LOGIN</BaseButton>
    </section>
  </div>
</template>

<script setup>
import InputField from '@/components/form_items/InputField.vue'
import BaseButton from '@/components/BaseButton.vue'
import { axiosBackend } from '@/config/axios'
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const storeUser = useUserStore()
const router = useRouter()

let email = ref('')
let password = ref('')
let errors = ref({})

const errorClasses = ['border-red-600', 'border-2']
const emailInput = ref(null)
const passwordInput = ref(null)

function submit() {
  errors.value = {}

  if (isValidEmail() && isValidPassword()) {
    axiosBackend
      .post('/login', {
        email: email.value,
        password: password.value
      })
      .then((response) => {
        storeUser.user = response.data
        storeUser.isAuthenticated = true

        localStorage.setItem('isAuth', storeUser.isAuthenticated)
        localStorage.setItem('user', JSON.stringify(storeUser.user))

        router.push({ name: 'orders' })
      })
      .catch((err) => {
        errors.value = err.response.data
      })
  }
}

function isValidEmail() {
  if (!email.value) {
    errors.value.email = 'Please fill out this field'
    //TODO
    // emailInput.value.focus();
    return false
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    errors.value.email = 'Please enter a valid email address'
    //TODO
    // emailInput.value.focus();
    return false
  }

  return true
}
function isValidPassword() {
  if (!password.value) {
    errors.value.password = 'Please fill out this field'
    //TODO
    // passwordInput.value.focus()
    return false
  }

  return true
}
</script>
