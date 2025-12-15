<script setup lang="ts">
type ClickEmits = {
  (event: 'select', value: string): void
}
const emit = defineEmits<ClickEmits>()

interface Props {
  list: string[]
  selectedProp: string
}
const props = defineProps<Props>()
const selected = ref(props.selectedProp)
const handleSelect = (sel: string) => {
  selected.value = sel
  emit('select', sel)
}
</script>

<template>
  <div class="flex justify-center items-center">
    <div class="inline-flex rounded-full border border-gray-300 overflow-hidden">
      <button
        v-for="element of list"
        :key="element"
        :class="
          selected === element
            ? 'bg-orange-400 text-white hover:text-white hover:bg-orange-400'
            : ''
        "
        class="px-6 py-2 text-sm cursor-pointer hover:bg-gray-200 text-gray-900 border-r border-gray-300 transition duration-150 ease-in-out"
        @click="handleSelect(element)"
      >
        {{ element }}
      </button>
    </div>
  </div>
</template>
