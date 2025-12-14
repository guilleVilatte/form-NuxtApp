<script setup lang="ts">
import { useFormStore } from '@/store/form'
import { PlusCircleIcon } from '@heroicons/vue/24/solid'
import ButtonComponent from '@/components/base/ButtonComponent.vue'

const form = useFormStore()
</script>

<template>
  <div class="flex justify-center items-center gap-8 flex-col">
    <div class="h-24 w-24 rounded-full bg-sky-100 flex justify-center items-center">
      <img class="h-12 w-12" src="@/resources/images/pencil.png" alt="lapiz" />
    </div>
    <h1 class="font-normal text-3xl text-gray-700">¿Cómo se llaman tus perretes?</h1>
    <div class="flex w-full gap-2">
      <input
        type="text"
        id="name"
        v-model="form.name"
        placeholder="MI PERRHIJO SE LLAMA..."
        class="bg-gray-100 py-3 px-6 mb-1 w-full border border-gray-300 rounded-3xl focus:outline-2 focus:outline-orange-400"
      />
      <input
        type="text"
        id="name"
        v-model="form.nameTwo"
        placeholder="MI PERRHIJO SE LLAMA..."
        class="bg-gray-100 py-3 px-6 mb-1 w-full border border-gray-300 rounded-3xl focus:outline-2 focus:outline-orange-400"
      />
    </div>
    <ButtonComponent
      type="link"
      text="¿Tienes más de un perro?"
      :disabled="false"
      :icon="PlusCircleIcon"
    />
    <div class="h-[50px]">
      <ButtonComponent text="Continuar" :disabled="!form.name" />
    </div>
  </div>
</template>
