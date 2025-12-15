<script setup lang="ts">
import ButtonComponent from '@/components/base/ButtonComponent.vue'

const handleMsg = () =>
  window.open(
    'https://api.whatsapp.com/send/?phone=34604101010&text&type=phone_number&app_absent=0',
    '_blank'
  )
</script>

<template>
  <div class="flex items-center gap-8 flex-col max-w-xl">
    <div class="h-24 w-50 rounded-full bg-sky-100 flex justify-center items-center">
      <img class="h-12 w-12" src="@/resources/images/perrito.png" alt="" />
      <img class="h-12 w-12" src="@/resources/images/perrito.png" alt="" />
      <img class="h-12 w-12" src="@/resources/images/perrito.png" alt="" />
    </div>
    <h1 class="font-semibold text-3xl text-gray-700">¿Familia numerosa?</h1>
    <p class="text-center">
      Revisaremos el precio de tu plan y trataremos de ajustarnos a tu necesidad lo máximo posible.
    </p>
    <h2 class="font-semibold text-3xl text-gray-700">¿Hablamos?</h2>
    <button class="flex justify-center items-center cursor-pointer my-4" @click="handleMsg">
      <img class="h-full w-full" src="@/resources/images/whatsapp.svg" alt="" />
    </button>
    <div class="h-[50px] mx-0">
      <ButtonComponent text="Escribir" :disabled="false" @click="handleMsg" />
    </div>
  </div>
</template>
