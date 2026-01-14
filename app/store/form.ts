import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import breeds from '@/data/breeds.json'

export const useFormStore = defineStore('form', () => {
  const form = reactive({
    breed: '',
    name: '',
    sex: '',
    sterilized: '',
    year: '',
    month: '',
    shape: '2',
    weight: '',
    activity: '',
    pathology: '',
    whichPathology: '',
    foodCritic: '2',
    human: {
      email: '',
      number: ''
    }
  })
  const callus = ref(false)
  const lastStep = ref(0)
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

  const handleShape = (sel: string) => {
    form.shape = sel
  }

  const handleActivity = (sel: string) => {
    form.activity = sel
  }

  const handleFoodCritic = (sel: string) => {
    form.foodCritic = sel
  }

  // DISABLED
  // caso 1: !form.form.breed
  // caso 2: :disabled="!form.form.name || !form.form.name"
  // caso 3: :disabled="!form.form.sterilized || !form.form.sex"
  //  caso 4: :disabled="!form.form.year || !form.form.month"
  // caso 5: :disabled="!form.form.shape || !form.form.weight"
  // caso 6: :disabled="!form.form.activity"
  // caso 7: :disabled="!(form.form.pathology === 'No' || form.form.whichPathology)"
  // caso 8: :disabled="!form.form.foodCritic"
  // caso 9: :disabled="!form.form.human.email || errorEmail || !form.form.human.number || errorNumber"

  return {
    form,
    callus,
    lastStep,
    handleSex,
    handleShape,
    withStepSix,
    handleActivity,
    handlePathology,
    handleSelectYear,
    handleFoodCritic,
    handleSelectBreed,
    handleSelectMonth,
    handleSelectPathology,
    handleSterilizedOptions
  }
})
