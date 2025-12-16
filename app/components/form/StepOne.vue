<script setup lang="ts">
import Autocomplete from '@/components/base/Autocomplete.vue'
import ButtonComponent from '@/components/base/ButtonComponent.vue'
import { useFormStore } from '@/store/form'
import { ArrowRightIcon } from '@heroicons/vue/24/solid'
import breeds from '@/data/breeds.json'

type changeStepEmits = {
  (event: 'changeStep'): void
}

const emit = defineEmits<changeStepEmits>()

const form = useFormStore()
</script>

<template>
  <div class="flex gap-6 flex-col max-w-lg">
    <h1 class="font-semibold text-5xl text-gray-700">Pon comida de verdad en el bol de tu perro</h1>
    <p>Comida natural para perros, completa y equilibrada. Elaborada por nutricionistas</p>
    <Autocomplete
      :list="breeds"
      placeholder="¿Qué raza es tu peludo?"
      :selected="form.form.breed"
      @select="form.handleSelectBreed"
    />
    <div class="h-[50px]">
      <ButtonComponent
        class="w-full"
        text="Crea su menú"
        :icon="ArrowRightIcon"
        :disabled="!form.form.breed"
        @click="emit('changeStep')"
      />
    </div>
  </div>
</template>
