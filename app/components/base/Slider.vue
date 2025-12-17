<script setup lang="ts">
import { ref, watch } from 'vue'

type SliderEmits = {
  (event: 'value', value: string): void
}
interface Props {
  value: string
}

const emit = defineEmits<SliderEmits>()
const props = withDefaults(defineProps<Props>(), {
  value: '2' as string
})
const val = ref(props.value)

watch(val, (newVal) => {
  emit('value', newVal)
})
</script>

<template>
  <div class="w-full max-w-md px-4 mb-4">
    <div class="relative">
      <div class="h-2 bg-gray-300 rounded-full"></div>

      <input
        data-testid="slider"
        type="range"
        v-model="val"
        min="1"
        max="3"
        class="absolute top-1/2 -translate-y-1/2 w-full h-6 bg-transparent appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-yellow-400 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:bg-yellow-400 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0"
      />
    </div>
  </div>
</template>
