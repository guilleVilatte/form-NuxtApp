<script setup lang="ts">
import StepOne from '@/components/form/StepOne.vue'
import StepTwo from '@/components/form/StepTwo.vue'
import StepThree from '@/components/form/StepThree.vue'
import StepFour from '@/components/form/StepFour.vue'
import StepFive from '@/components/form/StepFive.vue'
import StepSix from '@/components/form/StepSix.vue'
import StepSeven from '@/components/form/StepSeven.vue'
import CallUsScreen from '@/components/form/CallUsScreen.vue'
import { useFormStore } from '@/store/form'
import { ArrowLeftCircleIcon } from '@heroicons/vue/24/solid'

const step = ref(1)
const callus = ref(false)
const form = useFormStore()

const handleSteps = (from: string) => {
  if (from === 'callus') {
    step.value = 2
    callus.value = true
  } else if (from === 'back' && step.value === 7) {
    if (form.withStepSix) step.value--
    else step.value = 5
  } else if (from === 'back' && step.value !== 1 && !callus.value) step.value--
  else if (from === 'back' && step.value !== 1 && callus.value) callus.value = false
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
  } else if (from === 'foward') step.value++
  console.log(step.value, form.withStepSix)
}
</script>

<template>
  <div class="h-full p-4">
    <button
      class="text-start w-20 h-20 text-orange-600 cursor-pointer absolute"
      @click="handleSteps('back')"
    >
      <ArrowLeftCircleIcon />
    </button>
    <div class="flex flex-col justify-center items-center h-full">
      <StepOne v-if="step === 1" @changeStep="handleSteps('foward')" />
      <StepTwo
        v-else-if="step === 2 && !callus"
        @changeStep="handleSteps('foward')"
        @callus="handleSteps('callus')"
      />
      <CallUsScreen v-else-if="step === 2 && callus" />
      <StepThree v-if="step === 3" @changeStep="handleSteps('foward')" />
      <StepFour v-if="step === 4" @changeStep="handleSteps('foward')" />
      <StepFive v-if="step === 5" @changeStep="handleSteps('foward')" />
      <StepSix v-if="step === 6" @changeStep="handleSteps('foward')" />
      <StepSeven v-if="step === 7" @changeStep="handleSteps('foward')" />
    </div>
  </div>
</template>
