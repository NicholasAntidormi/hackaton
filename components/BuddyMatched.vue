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
      <div class="w-12">
        <img src="/marialuisa.png" />
      </div>
      <div>
        <p>{{ buddy.Name }}</p>
        <p>{{ buddy["General Role"] }}</p>
        <p>Sede: {{ buddy["Main Office"] }}</p>
      </div>
    </div>

    <div class="flex items-center gap-x-10">
      <div class="flex gap-x-2">
        <span
          v-for="interest in ([] as string[]).concat(buddy.Interest)"
          :class="{
            'opacity-50':
              !([] as string[])
                .concat(newEmployee.Interest)
                .some(newEmployessInterest => newEmployessInterest === interest)
          }"
          class="px-2 py-1 rounded-[4px] bg-[#E9E9E9]"
        >
          {{ interest }}
        </span>
      </div>

      <button @click="$emit('sendEvent', buddy.Email)" class="underline">Seleziona</button>
    </div>
  </div>
</template>
