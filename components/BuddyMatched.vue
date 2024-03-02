<script setup lang="ts">
import type { Person } from '~/types/Person'

defineProps<{
  buddy: Person
  newEmployee: Person
}>()

defineEmits<{
  sendEvent: [email: string]
}>()
</script>

<template>
  <div class="py-4 px-6 flex justify-between items-center">
    <div class="flex gap-x-6">
      <div class="w-12 h-12 rounded-full flex justify-center items-center text-[white] bg-[#68C3CD]">
        {{ buddy.Name.split(' ').map(text => text[0]).join('').toUpperCase() }}
      </div>
      <div>
        <p>{{ buddy.Name }}</p>
        <p>{{ buddy["General Role"] }}</p>
        <p>Sede: {{ buddy["Main Office"] }}</p>
      </div>
    </div>

    <div class="flex items-center gap-x-10">
      <div class="flex gap-x-2">
        <span class="px-2 py-1 rounded-[4px] bg-[#E9E9E9]">
          #{{ buddy.Bu  }}
        </span>
        <span
          v-for="oldCompany in ([] as string[]).concat(buddy['Old Company'])"
          :class="{
            'hidden':
              !([] as string[])
                .concat(newEmployee['Old Company'])
                .some(newEmployessCompany => newEmployessCompany === oldCompany)
          }"
          class="px-2 py-1 rounded-[4px] bg-[#E9E9E9]"
        >
          #{{ oldCompany }}
        </span>
        <span
          v-for="interest in ([] as string[]).concat(buddy.Interest)"
          :class="{
            'hidden':
              !([] as string[])
                .concat(newEmployee.Interest)
                .some(newEmployessInterest => newEmployessInterest === interest)
          }"
          class="px-2 py-1 rounded-[4px] bg-[#E9E9E9]"
        >
          {{ interest }}
        </span>
        <span
          v-for="country in ([] as string[]).concat(buddy['Regioni vissute'])"
          :class="{
            'hidden':
              !([] as string[])
                .concat(newEmployee['Regioni vissute'])
                .some(newEmployessCountry => newEmployessCountry === country)
          }"
          class="px-2 py-1 rounded-[4px] bg-[#E9E9E9]"
        >
          #{{ country }}
        </span>
      </div>

      <button @click="$emit('sendEvent', buddy.Email)" class="underline">Seleziona</button>
    </div>
  </div>
</template>
