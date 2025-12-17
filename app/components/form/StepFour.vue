<script setup lang="ts">
import { useFormStore } from '@/store/form'
import Autocomplete from '@/components/base/Autocomplete.vue'
import ButtonComponent from '@/components/base/ButtonComponent.vue'
import HelpMessages from '@/components/base/HelpMessages.vue'
import emojiDoc from '@/resources/images/emojiDoc.png'
import months from '@/data/months.json'
import years from '@/data/years.json'

type changeStepEmits = {
  (event: 'changeStep'): void
}
const emit = defineEmits<changeStepEmits>()

const form = useFormStore()
const icon = h('img', { class: 'w-4 h-4 mx-1', src: emojiDoc })
</script>

<template>
  <div class="flex justify-center items-center gap-8 flex-col min-w-lg">
    <div class="h-24 w-24 rounded-full bg-sky-100 flex justify-center items-center">
      <img class="h-12 w-12" src="@/resources/images/cake.png" alt="" />
    </div>
    <h1 class="font-normal text-3xl text-gray-700">¿Cuándo nació {{ form.form.name }}?</h1>
    <div class="w-3/4 flex flex-col gap-2">
      <Autocomplete
        :list="years"
        :select="true"
        placeholder="Año"
        :selected="form.form.year"
        @select="form.handleSelectYear"
      />
      <Autocomplete
        :list="months"
        :select="true"
        placeholder="Mes"
        :selected="form.form.month"
        @select="form.handleSelectMonth"
      />
    </div>
    <div class="h-[50px]">
      <ButtonComponent
        text="Continuar"
        :disabled="!form.form.year || !form.form.month"
        @click="emit('changeStep')"
      />
    </div>
  </div>
  <HelpMessages
    class="mt-10"
    :bool="true"
    text-one="¿Por qué es importante?"
    :icon="icon"
    text-two="Las necesidades calóricas varían según la edad de tu perro, pero nos adaptaremos perfectamente a su momento vital."
  />
</template>
