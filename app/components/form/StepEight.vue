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
    <div class="h-24 w-24 rounded-full bg-sky-100 flex justify-center items-center">
      <img class="h-12 w-12" src="@/resources/images/fork.png" alt="" />
    </div>
    <h1 class="font-normal text-3xl text-gray-700">¿Qué crítico gastronómico es tu perro?</h1>
    <p>Elige la opción que mejor describa a {{ form.form.name }}</p>
    <div class="border border-orange-300 rounded-lg p-4 text-orange-500 font-medium">
      <p v-if="form.form.foodCritic === '1'">
        El selectivo: es de paladar exigente, suele costarle terminar su ración y se cansa de la
        comida (verás qué cambio cuando pruebe Dogfy)
      </p>
      <p v-if="form.form.foodCritic === '2'">
        El gourmet: le encanta probar nuevos sabores, pero no se conforma con cualquier cosa.
      </p>
      <p v-if="form.form.foodCritic === '3'">
        El glotón: devora todo tipo de comida como si no fuera a probar bocado nunca más
      </p>
    </div>
    <Slider :value="form.form.foodCritic" @value="form.handleFoodCritic" />
  </div>
</template>
