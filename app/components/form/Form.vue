<script setup lang="ts">
import ButtonComponent from '@/components/base/ButtonComponent.vue'
import StepOne from '@/components/form/StepOne.vue'
import StepTwo from '@/components/form/StepTwo.vue'
import StepThree from '@/components/form/StepThree.vue'
import StepFour from '@/components/form/StepFour.vue'
import StepFive from '@/components/form/StepFive.vue'
import StepSix from '@/components/form/StepSix.vue'
import StepSeven from '@/components/form/StepSeven.vue'
import StepEight from '@/components/form/StepEight.vue'
import StepNine from '@/components/form/StepNine.vue'
import { useFormStore } from '@/store/form'
import { ArrowLeftCircleIcon, ArrowRightIcon } from '@heroicons/vue/24/solid'
import InfoComponent from './InfoComponent.vue'

const step = ref(1)
const form = useFormStore()

const handleSteps = (from: string) => {
  form.lastStep = step.value
  form.callus = false
  if (from === 'back' && step.value === 7) {
    if (form.withStepSix) step.value--
    else step.value = 5
  } else if (from === 'back' && step.value !== 1) step.value--
  else if (from === 'foward' && step.value === 5) {
    if (
      (Math.floor(Math.random() * 10) % 2 === 0 && form.withStepSix === null) ||
      form.withStepSix
    ) {
      form.withStepSix = true
      step.value++
    } else {
      form.withStepSix = false
      step.value = 7
    }
  } else if (from === 'foward' && step.value === 9) {
    submitForm()
    step.value++
  } else if (from === 'foward') step.value++
}

async function submitForm() {
  try {
    await $fetch('/api/saveForm', {
      method: 'POST',
      body: form.form
    })
  } catch (err) {
    console.log(err)
  }
}

const handleRoutes = (elem: number) => {
  step.value = elem
}

const handleMsg = () =>
  window.open(
    'https://api.whatsapp.com/send/?phone=34604101010&text&type=phone_number&app_absent=0',
    '_blank'
  )
</script>

<template>
  <div class="h-full p-4">
    <button
      v-if="step !== 1"
      class="text-start w-20 h-20 text-orange-600 cursor-pointer absolute hover:-translate-y-1 hover:scale-105 transition duration-150 ease-in-out"
      @click="handleSteps('back')"
    >
      <ArrowLeftCircleIcon />
    </button>
    <div class="flex flex-col justify-center items-center h-full">
      <StepOne v-if="step === 1" @changeStep="handleSteps('foward')" />
      <StepTwo v-else-if="step === 2" @changeStep="handleSteps('foward')" />
      <StepThree v-else-if="step === 3" @changeStep="handleSteps('foward')" />
      <StepFour v-else-if="step === 4" @changeStep="handleSteps('foward')" />
      <StepFive v-else-if="step === 5" @changeStep="handleSteps('foward')" />
      <StepSix v-else-if="step === 6" @changeStep="handleSteps('foward')" />
      <StepSeven v-else-if="step === 7" @changeStep="handleSteps('foward')" />
      <StepEight v-else-if="step === 8" @changeStep="handleSteps('foward')" />
      <StepNine v-else-if="step === 9" @changeStep="handleSteps('foward')" />
      <InfoComponent v-else-if="step === 10" />
      <div class="flex gap-6 bg-gray-50 rounded-full absolute top-6 px-10 py-6">
        <button
          v-for="element of 10"
          :key="element"
          class="h-4 w-4 bg-gray-300 rounded-full cursor-pointer enabled:hover:-translate-y-1 enabled:hover:scale-110 transition duration-75 ease-in-out"
          :class="element === step ? 'bg-orange-500' : ''"
          :disabled="form.lastStep < element"
          @click="handleRoutes(element)"
        ></button>
      </div>
      <div class="h-[50px] mt-6">
        <ButtonComponent
          v-if="step !== 10"
          class="w-full"
          :text="
            step === 1
              ? 'Crea su menú'
              : form.callus
                ? 'Escribir'
                : step === 9
                  ? `Ver el menú de ${form.form.name}`
                  : 'Continuar'
          "
          :icon="step === 1 ? ArrowRightIcon : undefined"
          :disabled="false"
          @click="form.callus ? handleMsg : handleSteps('foward')"
        />
      </div>
    </div>
  </div>
</template>
