<script setup lang="ts">
import { useFormStore } from '@/store/form'
import ButtonComponent from '@/components/base/ButtonComponent.vue'

type changeStepEmits = {
  (event: 'changeStep'): void
}
const emit = defineEmits<changeStepEmits>()

const form = useFormStore()
form.form.activity = '2'
</script>

<template>
  <div class="flex justify-center items-center gap-8 flex-col sm:w-xl">
    <h1 class="font-normal text-3xl text-gray-700">
      ¿Cuál es el nivel de actividad de {{ form.form.name }}?
    </h1>
    <p>Elige el nivel de actividad que mejor le describa.</p>
    <div class="border border-blue-200 rounded-lg p-4 text-blue-600 font-medium">
      <p v-if="form.form.activity === '1'">
        Perro alfombra: paseos diarios de menos de 1h. Lo que más le gusta es echarse una buena
        siesta y estar bien tranquilito.
      </p>
      <p v-if="form.form.activity === '2'">
        Perro zen: paseos diarios de 1 a 2h. Sabe disfrutar de buenas caminatas, pero también sabe
        cuándo descansar!
      </p>
      <p v-if="form.form.activity === '3'">
        Perro terremoto: paseos diarios de más de 2h. ¡No veas qué torbellino de energía!
      </p>
    </div>
    <input class="w-1/2" v-model="form.form.activity" type="range" max="3" min="1" />
    <div class="h-[50px]">
      <ButtonComponent
        text="Continuar"
        :disabled="!form.form.activity"
        @click="emit('changeStep')"
      />
    </div>
  </div>
</template>
