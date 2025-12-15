import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import breeds from '@/data/breeds.json'

export const useFormStore = defineStore('form', () => {
  const form = reactive({
    breed: '',
    name: '',
    nameTwo: '',
    sex: '',
    sterilized: '',
    year: '',
    month: '',
    shape: '2',
    weight: '',
    activity: '2',
    pathology: '',
    whichPathology: ''
  })
  const withStepSix = ref<boolean | null>(null)

  const handleSelectBreed = (value: string) => {
    const val = breeds.filter((breed) => breed.name.toLowerCase() === value.toLowerCase())
    form.breed = val[0] ? val[0].name : 'Mestizo'
  }

  const handleSex = (sel: string) => {
    form.sex = sel
  }

  const handleSterilizedOptions = (sel: string) => {
    form.sterilized = sel
  }

  const handleSelectYear = (sel: string) => {
    form.year = sel
  }

  const handleSelectMonth = (sel: string) => {
    form.month = sel
  }

  const handlePathology = (sel: string) => {
    if (sel === 'No') form.whichPathology = ''
    form.pathology = sel
  }

  const handleSelectPathology = (sel: string) => {
    form.whichPathology = sel
  }

  return {
    form,
    handleSex,
    withStepSix,
    handlePathology,
    handleSelectYear,
    handleSelectBreed,
    handleSelectMonth,
    handleSelectPathology,
    handleSterilizedOptions
  }
})
