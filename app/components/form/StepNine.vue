<script setup lang="ts">
import { useFormStore } from '@/store/form'
import ButtonComponent from '@/components/base/ButtonComponent.vue'

type changeStepEmits = {
  (event: 'changeStep'): void
}
const emit = defineEmits<changeStepEmits>()

const form = useFormStore()
</script>

<template>
  <div class="flex justify-center items-center gap-8 flex-col sm:w-xl">
    <div class="h-24 w-24 rounded-full bg-sky-100 flex justify-center items-center">
      <img class="h-12 w-12" src="@/resources/images/ok.png" alt="" />
    </div>
    <h1 class="font-normal text-3xl text-gray-700">
      ¡El menú especial para {{ form.form.name }} está casi listo!
    </h1>
    <div class="flex flex-col gap-1 w-full max-w-lg">
      <input
        type="email"
        id="email"
        v-model="form.form.human.email"
        placeholder="tumejorcorreo@gmail.com"
        class="bg-gray-100 py-3 px-6 mb-1 w-full border border-gray-300 rounded-3xl focus:outline-2 focus:outline-orange-400"
      />
      <input
        type="text"
        id="phone"
        v-model="form.form.human.number"
        placeholder="611 222 333"
        class="bg-gray-100 py-3 px-6 mb-1 w-full border border-gray-300 rounded-3xl focus:outline-2 focus:outline-orange-400"
      />
    </div>
    <div class="h-[50px]">
      <ButtonComponent
        :text="'Ver el menú de ' + form.form.name"
        :disabled="!form.form.human.number || !form.form.human.email"
        @click="emit('changeStep')"
      />
    </div>
  </div>
</template>
