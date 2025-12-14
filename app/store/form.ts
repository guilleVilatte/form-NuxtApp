import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFormStore = defineStore('form', () => {
  const breed = ref('')
  const name = ref('')
  const nameTwo = ref('')

  const handleSelectBreed = (value: string) => {
    breed.value = value
  }

  return {
    breed,
    name,
    nameTwo,
    handleSelectBreed
  }
})
