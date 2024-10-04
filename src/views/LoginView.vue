<template>
  <div class="w-96 rounded-xl border bg-white p-8 shadow sm:w-auto sm:max-w-screen-sm sm:flex-grow">
    <h1 class="text-center text-3xl font-bold text-neutral-600">Sign in</h1>
    <section class="mb-7 mt-11 flex flex-col items-center gap-y-5">
      <InputField
        class="w-full sm:w-1/2"
        :class="[errors.email ? Validator.errorClasses : '']"
        v-model="email"
        placeholder="Email"
        ref="emailInput"
      />
      <InputField
        class="w-full sm:w-1/2"
        :class="[errors.password ? Validator.errorClasses : '']"
        inputType="password"
        v-model="password"
        placeholder="Password"
        ref="passwordInput"
      />
      <ErrorMessage v-show="!isObjectEmpty(errors)">
        {{ errors.email || errors.password }}
      </ErrorMessage>
      <BaseButton class="uppercase w-full sm:w-1/2" @click="submit">Login</BaseButton>
      <p>
        Not a member?
        <RouterLink class="text-han-blue hover:underline" :to="{ name: 'register' }"
          >Register</RouterLink
        >
      </p>
    </section>
  </div>
</template>

<script setup>
import InputField from '@/components/form_items/InputField.vue'
import ErrorMessage from '@/components/form_items/ErrorMessage.vue'
import BaseButton from '@/components/BaseButton.vue'
import { axiosBackend } from '@/config/axios'
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { Validator, isObjectEmpty } from '@/misc/helpers'

const storeUser = useUserStore()
const router = useRouter()

let email = ref('')
let password = ref('')
let errors = ref({})

const emailInput = ref(null)
const passwordInput = ref(null)

function submit() {
  errors.value = {}

  if(Validator.isEmpty(email.value)) {
    errors.value.email = Validator.ERRORS.EMPTY_FIELD;
    //TODO
    // emailInput.value.focus();
    return false;
  }
  if(Validator.isInvalidEmail(email.value)) {
    errors.value.email = Validator.ERRORS.INVALID_EMAIL;
    //TODO
    // emailInput.value.focus();
    return false;
  }
  if(Validator.isEmpty(password.value)) {
    errors.value.password = Validator.ERRORS.EMPTY_FIELD;
    //TODO
    // passwordInput.value.focus()
    return false;
  }

  if (isObjectEmpty(errors.value)) {
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
</script>
