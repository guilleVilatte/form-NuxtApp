<script setup lang="ts">
import { useFormStore } from '@/store/form'

const form = useFormStore()
</script>

<template>
  <div
    class="h-[500px] w-[400px] gap-1 flex flex-col justify-start items-start p-8 border border-orange-500 rounded-lg"
  >
    <span class="text-xl text-orange-500 font-medium">{{
      form.form.activity ? 'GroupA.json' : 'GroupB.json'
    }}</span>
    <span class="text-xl text-orange-500 font-medium">{{ form.form.human.email }}</span>
    <span class="text-xl text-orange-500 font-medium mb-3">{{ form.form.human.number }}</span>
    <div>Raza: {{ form.form.breed }}</div>
    <div>Nombre: {{ form.form.name }}</div>
    <div>Sexo: {{ form.form.sex }}</div>
    <div>Esterilizado: {{ form.form.sterilized }}</div>
    <div>Año: {{ form.form.year }}</div>
    <div>Mes: {{ form.form.month }}</div>
    <div>Forma(1-3): {{ form.form.shape }}</div>
    <div>Peso(KG): {{ form.form.weight }}</div>
    <div>Patología: {{ form.form.whichPathology }}</div>
    <div>Crítico: {{ form.form.foodCritic }}</div>
  </div>
</template>
