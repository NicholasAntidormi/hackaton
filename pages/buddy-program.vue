<script setup lang="ts">
import type { Person } from '~/types/Person.ts'
const { search } = useAlgoliaSearch('People')

const getBuddies = async (person: Person) => {
  const res = await search({
    query: '',
    requestOptions: {
    facetFilters: [
      // BU diverse
      [`Bu:-${person.Bu}`],
      [
        // Interessi in comune (OTTIMALE: più voci coincidono, maggiore è la priority)
        ...([] as string[]).concat(person.Interest).map(interest => `Interest:${interest}`),
        // Stessa Seniority (possibilmente)
        `Seniority:${person.Seniority}`,
        // Old Company uguali (in caso di match)
        ...([] as string[]).concat(person['Old Company']).map(company => `Old Company:${company}`),
        // Regioni vissute (in caso di match)
        ...([] as string[]).concat(person['Regioni vissute']).map(region => `Regioni vissute:${region}`),
      ]
  ]
  }
})
return res

}

const newEmployee = {
  "Title": "New Entry 1",
  "Name": "New Entry 1",
  "Created Time": "2024-03-01T20:13:00.000Z",
  "Last Edited Time": "2024-03-01T21:57:00.000Z",
  "Url": "https://www.notion.so/New-Entry-1-7a7394022b20457eacdac073987a624f",
  "Page Id": "7a739402-2b20-457e-acda-c073987a624f",
  "Object": "page",
  "ID": "7a739402-2b20-457e-acda-c073987a624f|2024-03-01T21:57:00.000Z",
  "Type": "New-employee",
  "Last Edited By Id": "8a8d23f1-9c2b-4deb-a98c-4ea5d7cd964b",
  "Last Edited By Object": "user",
  "Parent Type": "database_id",
  "Archived": false,
  "Interest": "#Padel",
  "Old Company": "Accenture",
  "Regioni vissute": "Lombardia",
  "Bu": "Atoms",
  "General Role": "Data Analyst",
  "Main Office": "Padova",
  "Email": "new.entry1@retex.com",
  "Seniority": "Senior",
  "objectID": "new.entry1@retex.com"
}
const buddies = ref()

const initBuddies = async () => {
  buddies.value = await getBuddies(newEmployee)
}
</script>

<template>
  <div>
    <pre>newEmployee: {{ newEmployee }}</pre>
    <button @click="initBuddies">initBuddies</button>
    <pre>buddies: {{ buddies }}</pre>
  </div>
</template>
