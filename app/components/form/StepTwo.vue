<script setup lang="ts">
import { useFormStore } from '@/store/form'
import emoji from '@/resources/images/emoji.png'
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/vue/24/solid'
// import Autocomplete from '@/components/base/Autocomplete.vue'
import ButtonComponent from '@/components/base/ButtonComponent.vue'
import HelpMessages from '@/components/base/HelpMessages.vue'
// import breeds from '@/data/breeds.json'
import { ref } from 'vue'

type changeStepEmits = {
  (event: 'changeStep'): void
  (event: 'callus'): void
}
const emit = defineEmits<changeStepEmits>()

const form = useFormStore()
const twoDogs = ref(false)
const icon = h('img', { class: 'w-4 h-4 mr-1', src: emoji })
</script>

<template>
  <div class="flex justify-center items-center gap-8 flex-col">
    <div class="h-24 w-24 rounded-full bg-sky-100 flex justify-center items-center">
      <img class="h-12 w-12" src="@/resources/images/pencil.png" alt="lapiz" />
    </div>
    <h1 class="font-normal text-3xl text-gray-700">¿Cómo se llama tus perrete?</h1>
    <div class="flex w-full gap-10 justify-center" :class="twoDogs ? 'min-w-2xl' : ''">
      <div class="flex flex-col w-full max-w-lg">
        <input
          type="text"
          id="name"
          v-model="form.form.name"
          placeholder="MI PERRHIJO SE LLAMA..."
          class="bg-gray-100 py-3 px-6 mb-1 w-full border border-gray-300 rounded-3xl focus:outline-2 focus:outline-orange-400"
        />
      </div>
      <!-- <div v-if="twoDogs" class="flex flex-col w-full gap-2">
        <input
          type="text"
          id="name"
          v-model="form.nameTwo"
          placeholder="MI PERRHIJO SE LLAMA..."
          class="bg-gray-100 py-3 px-6 mb-1 w-full border border-gray-300 rounded-3xl focus:outline-2 focus:outline-orange-400"
        />
        <Autocomplete :list="breeds" :selected="form.breed" @select="form.handleSelectBreed" />
        <div class="w-full flex justify-end">
          <ButtonComponent
            type="link"
            text="Quitar segundo perro"
            :disabled="false"
            :icon="MinusCircleIcon"
            @click="() => (twoDogs = false)"
          />
        </div>
      </div> -->
    </div>
    <div class="w-full flex justify-start">
      <ButtonComponent
        type="link"
        :text="twoDogs ? '¿Tienes más de dos perros?' : '¿Tienes más de un perro?'"
        :disabled="false"
        :icon="PlusCircleIcon"
        @click="emit('callus')"
      />
    </div>
    <div class="h-[50px]">
      <ButtonComponent
        text="Continuar"
        :disabled="
          (!form.form.name && !twoDogs) || ((!form.form.name || !form.form.nameTwo) && twoDogs)
        "
        @click="emit('changeStep')"
      />
    </div>
  </div>
  <HelpMessages
    class="mt-10"
    text-one="¡Qué emoción!"
    :icon="icon"
    text-two="Estás a punto de mejorar la vida de tu perrete a través de una alimentación 100% natural."
  />
</template>
