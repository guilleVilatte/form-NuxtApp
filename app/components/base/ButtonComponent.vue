<script setup lang="ts">
import type { Component } from 'vue'

interface Props {
  text: string
  type?: string
  icon?: Component
  disabled: boolean
}

const props = withDefaults(defineProps<Props>(), {
  text: '' as string,
  type: 'button' as string,
  disabled: true
})
</script>

<template>
  <button
    class="leading-5 h-full w-full flex font-inter enabled:cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
    :class="
      type === 'button'
        ? 'items-center justify-center text-lg px-8 py-2.5 rounded-3xl bg-orange-600 enabled:hover:bg-orange-700 text-white enabled:hover:-translate-y-1 enabled:hover:scale-105 font-semibold enabled:transition enabled:delay-150 enabled:duration-150 enabled:ease-in-out gap-x-2'
        : 'font-medium text-emerald-700 hover:text-emerald-500 transition duration-150 ease-in-out gap-x-1'
    "
    :disabled="disabled"
  >
    <span class="text-center">{{ text }}</span>
    <component v-if="icon" :is="icon" class="h-5 w-5" />
  </button>
</template>
