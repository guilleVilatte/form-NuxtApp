<script setup lang="ts">
import { useFormStore } from '@/store/form'
import ButtonComponent from '@/components/base/ButtonComponent.vue'

type changeStepEmits = {
  (event: 'changeStep'): void
}
const emit = defineEmits<changeStepEmits>()

const form = useFormStore()
const emailRe =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
const numberRe = /^(?:\+34|0034)?\s?[6789]\d{2}(?:\s?\d{3}){2}$/

const errorEmail = ref(false)
const errorNumber = ref(false)

const validate = (from: string) => {
  if (from === 'email') errorEmail.value = !emailRe.test(form.form.human.email)
  else errorNumber.value = !numberRe.test(form.form.human.number)
}
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
        @input="validate('email')"
      />
      <p v-if="errorEmail" class="text-red-500 text-sm">
        El formato de correo electrónico no es correcto.
      </p>
      <input
        type="text"
        id="phone"
        v-model="form.form.human.number"
        placeholder="611 222 333"
        class="bg-gray-100 py-3 px-6 mb-1 w-full border border-gray-300 rounded-3xl focus:outline-2 focus:outline-orange-400"
        @input="validate('number')"
      />
      <p v-if="errorNumber" class="text-red-500 text-sm">El formato de teléfono no es correcto.</p>
    </div>
    <div class="h-[50px]">
      <ButtonComponent
        :text="'Ver el menú de ' + form.form.name"
        :disabled="!form.form.human.email || errorEmail || !form.form.human.number || errorNumber"
        @click="emit('changeStep')"
      />
    </div>
  </div>
</template>
