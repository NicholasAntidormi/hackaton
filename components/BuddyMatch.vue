<script setup lang="ts">
import type { Person } from '~/types/Person'

const props = defineProps<{
  newEmployee: Person
  buddyEmail: string | null
}>()

const buddyEmail = ref(props.buddyEmail)

const { search } = useAlgoliaSearch<Person>('People')
const { data: buddies } = await useAsyncData(`Buddies_${props.newEmployee['Page Id']}`, () => search({
    query: '',
    requestOptions: {
    facetFilters: [
      [`Type:Buddy`],
      // BU diverse
      [`Bu:-${props.newEmployee.Bu}`],
      [
        // Interessi in comune (OTTIMALE: più voci coincidono, maggiore è la priority)
        ...([] as string[]).concat(props.newEmployee.Interest).map(interest => `Interest:${interest}`),
        // Stessa Seniority (possibilmente)
        `Seniority:${props.newEmployee.Seniority}`,
        // Old Company uguali (in caso di match)
        ...([] as string[]).concat(props.newEmployee['Old Company']).map(company => `Old Company:${company}`),
        // Regioni vissute (in caso di match)
        ...([] as string[]).concat(props.newEmployee['Regioni vissute']).map(region => `Regioni vissute:${region}`),
      ]
  ]
  }
}), {
  transform: (data) => data.hits
})

const sendEvent = async (newBuddyEmail: string) => {
  const res = await $fetch('/api/send-event', {
    method: 'POST',
    body: {
      newEmployeeEmail: props.newEmployee.Email,
      buddyEmail: newBuddyEmail
    }
  })
  buddyEmail.value = newBuddyEmail
}
</script>

<template>
  <div class="rounded-[20px] bg-[white]">
    <div class="p-6">
      <p class="mb-1">Buddy Match!</p>

      <template v-if="!buddyEmail">
        <p>{{ newEmployee.Name }} ha completato la survey.</p>
        <p>Scegli il buddy perfetto tra i suggerimenti di The Retex Circle.</p>
      </template>
      <div v-else class="flex justify-between items-center">
        <p>Il buddy <i>{{ buddyEmail }}</i> è stato assegnato a {{ newEmployee.Name }}.</p>
        <button class="underline" @click="buddyEmail = null">Cambia</button>

      </div>
    </div>

    <BuddyMatched v-if="!buddyEmail && buddies" class="border-t last:rounded-b-[20px]" v-for="buddy in buddies" :new-employee="newEmployee" :buddy="buddy" @send-event="sendEvent"/>
  </div>
</template>
