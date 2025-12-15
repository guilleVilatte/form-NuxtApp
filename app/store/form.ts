import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useFormStore = defineStore('form', () => {
  const form = reactive({
    breed: '',
    name: '',
    nameTwo: '',
    sex: '',
    sterilized: ''
  })

  const handleSelectBreed = (value: string) => {
    form.breed = value
  }

  return {
    form,
    handleSelectBreed
  }
})
