<script setup lang="ts">
import StepOne from '@/components/form/StepOne.vue'
import StepTwo from '@/components/form/StepTwo.vue'
import StepThree from '@/components/form/StepThree.vue'
import CallUsScreen from '@/components/form/CallUsScreen.vue'
import { ArrowLeftCircleIcon } from '@heroicons/vue/24/solid'

const step = ref(1)
const callus = ref(false)

const handleSteps = (from: string) => {
  if (from === 'callus') {
    step.value = 2
    callus.value = true
  } else if (from === 'back' && step.value !== 1 && !callus.value) step.value--
  else if (from === 'back' && step.value !== 1 && callus.value) callus.value = false
  else if (from === 'foward') step.value++
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
    </div>
  </div>
</template>
