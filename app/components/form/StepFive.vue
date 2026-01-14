<script setup lang="ts">
import { useFormStore } from '@/store/form'
import Slider from '@/components/base/Slider.vue'

type changeStepEmits = {
  (event: 'changeStep'): void
}
const emit = defineEmits<changeStepEmits>()

const form = useFormStore()
</script>

<template>
  <div class="flex justify-center items-center gap-8 flex-col sm:w-xl">
    <h1 class="font-normal text-3xl text-gray-700">
      ¿Qué silueta representa mejor a {{ form.form.name }}?
    </h1>
    <p>Selecciona la figura que más se asemeja en cuanto a su peso y forma</p>
    <div class="border border-orange-300 rounded-lg p-4 text-orange-500 font-medium">
      <p v-if="form.form.shape === '1'">
        Un poco flaquito: Cintura estrecha y se le ven claramente las costillas.
      </p>
      <p v-if="form.form.shape === '2'">
        Hecho un figurín: La cintura es visible y sus costillas son fáciles de palpar.
      </p>
      <p v-if="form.form.shape === '3'">
        Un poco rellenito: La cintura no es visible y sus costillas son difíciles de palpar.
      </p>
    </div>
    <Slider :value="form.form.shape" @value="form.handleShape" />
    <div class="flex flex-col gap-4 items-center w-full max-w-lg">
      <p>El peso de {{ form.form.name }} es más o menos de</p>
      <input
        maxlength="2"
        id="weight"
        v-model="form.form.weight"
        placeholder="KG"
        class="bg-gray-100 py-3 px-6 mb-1 w-1/4 border border-gray-300 rounded-3xl focus:outline-2 focus:outline-orange-400"
        @input="form.form.weight = form.form.weight.replace(/\D/g, '')"
      />
    </div>
  </div>
</template>
