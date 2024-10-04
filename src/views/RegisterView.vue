<template>
  <div class="w-96 rounded-xl border bg-white p-8 shadow sm:w-auto sm:max-w-screen-sm sm:flex-grow">
    <h1 class="text-center text-3xl font-bold text-neutral-600">Registration Form</h1>
    <section class="mb-7 mt-11 space-y-6">
      <div class="flex flex-col gap-y-6 sm:flex-row sm:items-center sm:gap-x-6">
        <InputField @input="setGenderToM()" class="w-full sm:w-1/2" placeholder="First Name" />
        <InputField @input="setGenderToF()" class="w-full sm:w-1/2" placeholder="Last Name" />
      </div>
      <div class="flex flex-col gap-y-6 sm:flex-row sm:items-center sm:gap-x-6">
        <InputField type="date" class="w-full sm:w-1/2" placeholder="Birthday" />
        <div class="w-full sm:w-1/2">
          <h2 class="font-semibold mb-1 sm:mb-0">Gender:</h2>
          <RadioButton class="mr-2" v-model="gender" name="gender" value="Female" />
          <RadioButton v-model="gender" name="gender" value="Male" />
        </div>
      </div>
      <div class="flex flex-col gap-y-6 sm:flex-row sm:items-center sm:gap-x-6">
        <InputField class="w-full sm:w-1/2" placeholder="Email" />
        <InputField class="w-full sm:w-1/2" placeholder="Phone Number" />
      </div>
      <select class="w-full" name="country">
        <option value="Latvia">Latvia</option>
        <option value="Estonia">Estonia</option>
        <option value="Lithuania">Lithuania</option>
      </select>
      <ErrorMessage v-show="!isObjectEmpty(errors)">
        {{ errors.firstName || errors.lastName || errors.email || errors.password }}
      </ErrorMessage>
      <BaseButton class="uppercase">
        Submit
      </BaseButton>
    </section>
  </div>
</template>

<script setup>
import InputField from '@/components/form_items/InputField.vue'
import RadioButton from '@/components/form_items/RadioButton.vue'
import ErrorMessage from '@/components/form_items/ErrorMessage.vue'
import BaseButton from '@/components/BaseButton.vue';
import { ref } from 'vue'

const gender = ref('Female')
</script>
