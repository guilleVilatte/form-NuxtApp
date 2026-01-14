<script setup lang="ts">
import { useFormStore } from '@/store/form'
import SegmentControlButtons from '@/components/base/SegmentControlButtons.vue'
import Autocomplete from '@/components/base/Autocomplete.vue'
import HelpMessages from '@/components/base/HelpMessages.vue'
import emojiDoc from '@/resources/images/emojiDoc.png'
import pathologies from '@/data/pathologies.json'

type changeStepEmits = {
  (event: 'changeStep'): void
}
const emit = defineEmits<changeStepEmits>()

const form = useFormStore()
const icon = h('img', { class: 'w-4 h-4 mx-1', src: emojiDoc })
</script>

<template>
  <div class="flex justify-center items-center gap-8 flex-col sm:w-xl">
    <div class="h-24 w-24 rounded-full bg-sky-100 flex justify-center items-center">
      <img class="h-12 w-12" src="@/resources/images/corazon.png" alt="" />
    </div>
    <h1 class="font-normal text-3xl text-gray-700">
      ¿Tiene {{ form.form.name }} alguna patología?
    </h1>
    <div class="flex flex-col gap-6 w-full items-center">
      <SegmentControlButtons
        :list="['Si', 'No']"
        :selected-prop="form.form.pathology"
        @select="form.handlePathology"
      />
      <Autocomplete
        v-if="form.form.pathology && form.form.pathology !== 'No'"
        class="w-2/3"
        :list="pathologies"
        placeholder="Seleccione una patología"
        :selected="form.form.whichPathology"
        @select="form.handleSelectPathology"
      />
    </div>
  </div>
  <HelpMessages
    class="mt-10 w-2/3"
    :bool="true"
    text-one="Cada perro es un mundo"
    :icon="icon"
    text-two="¡No te preocupes! Adaptaremos nuestro menú a su caso, siempre que sea posible. Si la patología de tu perro no aparece en el formulario, envía un correo a nutricionistas@dogfydiet.com."
  />
</template>
