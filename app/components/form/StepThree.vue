<script setup lang="ts">
import { useFormStore } from '@/store/form'
import SegmentControlButtons from '@/components/base/SegmentControlButtons.vue'
import ButtonComponent from '@/components/base/ButtonComponent.vue'
import HelpMessages from '@/components/base/HelpMessages.vue'
import emojiDoc from '@/resources/images/emojiDoc.png'

type changeStepEmits = {
  (event: 'changeStep'): void
}
const emit = defineEmits<changeStepEmits>()

const form = useFormStore()
const icon = h('img', { class: 'w-4 h-4 mx-1', src: emojiDoc })
</script>

<template>
  <div class="flex justify-center items-center gap-8 flex-col">
    <div class="h-24 w-24 rounded-full bg-sky-100 flex justify-center items-center">
      <img class="h-12 w-12" src="@/resources/images/emojiLupa.png" alt="" />
    </div>
    <div class="flex flex-col gap-6">
      <h1 class="font-normal text-3xl text-gray-700">¡Queremos conocer a {{ form.form.name }}!</h1>
      <SegmentControlButtons
        :list="['Macho', 'Hembra']"
        :selected-prop="form.form.sex"
        @select="form.handleSex"
      />
    </div>
    <div class="flex flex-col gap-6">
      <h1 class="font-normal text-3xl text-gray-700">¿Está esterilizado/a?</h1>
      <SegmentControlButtons
        :list="['Si', 'No']"
        :selected-prop="form.form.sterilized"
        @select="form.handleSterilizedOptions"
      />
    </div>
    <div class="h-[50px] mt-6">
      <ButtonComponent
        text="Continuar"
        :disabled="!form.form.sterilized || !form.form.sex"
        @click="emit('changeStep')"
      />
    </div>
  </div>
  <HelpMessages
    class="mt-10"
    :bool="true"
    text-one="¿Por qué es importante?"
    :icon="icon"
    text-two="Después de la esterilización, se requieren ajustes en la ración, ya que el perro suele tener menor gasto calórico."
  />
</template>
