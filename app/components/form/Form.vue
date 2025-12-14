<script setup lang="ts">
import StepOne from '@/components/form/StepOne.vue'
import StepTwo from '@/components/form/StepTwo.vue'
import { ArrowLeftCircleIcon } from '@heroicons/vue/24/solid'

const step = ref(1)

const handleSteps = (from: string) => {
  if (from === 'back' && step.value !== 1) step.value--
  else if (from === 'foward') step.value++
  console.log(step.value)
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
    <div class="flex justify-center items-center h-full">
      <StepOne v-if="step === 1" @changeStep="handleSteps('foward')" />
      <StepTwo v-if="step === 2" />
    </div>
  </div>
</template>
