<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

type AutocompleteEmits = {
  (event: 'select', value: string): void
}

interface ListElement {
  name: string
}

interface Props {
  list: ListElement[]
}

const emit = defineEmits<AutocompleteEmits>()

const props = withDefaults(defineProps<Props>(), {
  list: () => [] as ListElement[]
})

const autocompleteRef = ref<HTMLElement | null>(null)
const elements = computed((): ListElement[] => props.list)
const searchTerm = ref<string>('')
const isListVisible = ref<boolean>(false)

watch(searchTerm, (newVal) => {
  emit('select', newVal)
})

const searchElements = computed((): ListElement[] => {
  if (searchTerm.value === '') {
    return elements.value
  }

  const searchLower = searchTerm.value.toLowerCase()
  const filteredElements: ListElement[] = []
  let matches = 0

  elements.value.forEach((element) => {
    if (element.name.toLowerCase().includes(searchLower)) {
      if (matches < 10) {
        filteredElements.push(element)
        matches++
      }
    }
  })

  return filteredElements
})

const selectElement = (elementName: string): void => {
  searchTerm.value = elementName
}

const handleClickOutside = (event: MouseEvent): void => {
  if (autocompleteRef.value && !autocompleteRef.value.contains(event.target as Node)) {
    isListVisible.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="flex justify-center items-center">
    <div class="relative space-y-3 w-full" ref="autocompleteRef">
      <input
        type="text"
        id="search"
        v-model="searchTerm"
        placeholder="Qué raza es tu peludo?"
        class="bg-gray-100 py-3 px-6 mb-1 w-full border border-gray-300 rounded-3xl focus:outline-2 focus:outline-orange-400"
        @focus="isListVisible = true"
      />

      <ul
        v-if="
          isListVisible &&
          searchElements.length &&
          !searchElements.find((element) => element.name.toLowerCase() === searchTerm.toLowerCase())
        "
        class="w-full max-h-[200px] rounded bg-white border-x border-gray-300 border-b border-gray-300 px-4 py-2 space-y-1 absolute z-10 overflow-y-scroll"
      >
        <li
          v-for="element in searchElements"
          :key="element.name"
          @click="selectElement(element.name)"
          class="cursor-pointer hover:bg-gray-100 p-1"
        >
          {{ element.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
