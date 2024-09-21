<template>
    <div class="w-96 rounded-xl border bg-white p-8 shadow sm:flex-grow sm:w-auto sm:max-w-screen-sm">
        <h1 class="text-center text-3xl font-bold text-neutral-600">Sign in</h1>
        <section class="flex flex-col items-center mt-11 mb-7 gap-y-5">
          <InputField class="w-full sm:w-1/2" v-model="email" placeholder="Email"/>
          <InputField class="w-full sm:w-1/2" v-model="password" placeholder="Password"/>
          <BaseButton class="w-full sm:w-1/2">LOGIN</BaseButton>
        </section>
    </div>
</template>

<script setup>
import InputField from '@/components/form_items/InputField.vue';
import BaseButton from '@/components/BaseButton.vue';
import { ref } from 'vue'

let email = ref('');
let password = ref('');

import axios from 'axios'
axios.get('', {baseURL: 'http://localhost:5273'})
  .then((data) => console.log('Data: ', data))
  .catch(err => console.log('Error: ', err));

</script>