<script setup lang="ts">
import type { Component } from 'vue'

interface Props {
  bool?: boolean
  textOne: string
  textTwo: string
  icon?: Component
}

const props = withDefaults(defineProps<Props>(), {
  textOne: '' as string,
  textTwo: '' as string
})
</script>

<template>
  <div class="text-sm text-gray-600 rounded-lg bg-sky-100 flex p-4" :class="bool ? 'flex-col' : ''">
    <span class="flex" :class="bool ? 'font-medium' : ''"
      >{{ textOne }} <component :is="icon"
    /></span>
    <span>{{ textTwo }}</span>
  </div>
</template>
