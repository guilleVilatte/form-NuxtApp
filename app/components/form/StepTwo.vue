<script setup lang="ts">
import { useFormStore } from '@/store/form'
import emoji from '@/resources/images/emoji.png'
import CallUsScreen from '@/components/form/CallUsScreen.vue'
import HelpMessages from '@/components/base/HelpMessages.vue'

type changeStepEmits = {
  (event: 'changeStep'): void
}
const emit = defineEmits<changeStepEmits>()

const form = useFormStore()
const icon = h('img', { class: 'w-4 h-4 mr-1', src: emoji })
</script>

<template>
  <CallUsScreen v-if="form.callus" />
  <div class="flex justify-center items-center" v-else>
    <div class="flex justify-center items-center gap-8 flex-col">
      <div class="h-24 w-24 rounded-full bg-sky-100 flex justify-center items-center">
        <img class="h-12 w-12" src="@/resources/images/pencil.png" alt="lapiz" />
      </div>
      <h1 class="font-normal text-3xl text-gray-700">¿Cómo se llama tus perrete?</h1>
      <div class="flex w-full gap-10 justify-center">
        <div class="flex flex-col w-full max-w-lg">
          <input
            type="text"
            id="name"
            v-model="form.form.name"
            placeholder="MI PERRHIJO SE LLAMA..."
            class="bg-gray-100 py-3 px-6 mb-1 w-full border border-gray-300 rounded-3xl focus:outline-2 focus:outline-orange-400"
          />
        </div>
      </div>
    </div>
    <HelpMessages
      class="mt-10"
      text-one="¡Qué emoción!"
      :icon="icon"
      text-two="Estás a punto de mejorar la vida de tu perrete a través de una alimentación 100% natural."
    />
  </div>
</template>
