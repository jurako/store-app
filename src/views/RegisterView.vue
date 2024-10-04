<template>
  <div class="w-96 rounded-xl border bg-white p-8 shadow sm:w-auto sm:max-w-screen-sm sm:flex-grow">
    <h1 class="text-center text-3xl font-bold text-neutral-600">Registration Form</h1>
    <section class="mb-7 mt-11 space-y-6">
      <div class="flex flex-col gap-y-6 sm:flex-row sm:items-center sm:gap-x-6">
        <InputField
          v-model="firstName"
          :class="[errors.firstName ? Validator.errorClasses : '']"
          class="w-full sm:w-1/2"
          placeholder="First Name"
        />
        <InputField
          v-model="lastName"
          :class="[errors.lastName ? Validator.errorClasses : '']"
          class="w-full sm:w-1/2"
          placeholder="Last Name"
        />
      </div>
      <div class="flex flex-col gap-y-6 sm:flex-row sm:items-center sm:gap-x-6">
        <InputField v-model="birthday" type="date" class="w-full sm:w-1/2" placeholder="Birthday" />
        <div class="w-full sm:w-1/2">
          <h2 class="mb-1 font-semibold sm:mb-0">Gender:</h2>
          <RadioButton v-model="gender" name="gender" value="F" label="Female" class="mr-2" />
          <RadioButton v-model="gender" name="gender" value="M" label="Male" />
        </div>
      </div>
      <div class="flex flex-col gap-y-6 sm:flex-row sm:items-center sm:gap-x-6">
        <InputField
          v-model="email"
          :class="[errors.email ? Validator.errorClasses : '']"
          class="w-full sm:w-1/2"
          placeholder="Email"
        />
        <InputField
          v-model="password"
          type="password"
          :class="[errors.password ? Validator.errorClasses : '']"
          class="w-full sm:w-1/2"
          placeholder="Password"
        />
      </div>
      <select v-model="country" class="w-full" name="country">
        <option value="Latvia">Latvia</option>
        <option value="Estonia">Estonia</option>
        <option value="Lithuania">Lithuania</option>
      </select>
      <ErrorMessage v-show="!isObjectEmpty(errors)">
        {{ errors.firstName || errors.lastName || errors.email || errors.password }}
      </ErrorMessage>
      <BaseButton @click="submit" class="uppercase"> Submit </BaseButton>
    </section>
  </div>
</template>

<script setup>
import InputField from '@/components/form_items/InputField.vue'
import RadioButton from '@/components/form_items/RadioButton.vue'
import ErrorMessage from '@/components/form_items/ErrorMessage.vue'
import BaseButton from '@/components/BaseButton.vue'
import { ref } from 'vue'
import { isEmpty, isInvalidEmail, Validator, isObjectEmpty } from '@/misc/helpers'

const firstName = ref('')
const lastName = ref('')
const birthday = ref(0)
const gender = ref('F')
const email = ref('')
const password = ref('')
const country = ref('')
const errors = ref({})

const validator = new Validator([
  { ref: firstName, errorField: 'firstName', rules: [isEmpty] },
  { ref: lastName, errorField: 'lastName', rules: [isEmpty] },
  { ref: email, errorField: 'email', rules: [isEmpty, isInvalidEmail] },
  { ref: password, errorField: 'password', rules: [isEmpty] }
])

function submit() {
  validator.validate()
  errors.value = validator.errors

  if (isObjectEmpty(errors.value)) {
    alert('Good to submit register form!')
  }
}
</script>
