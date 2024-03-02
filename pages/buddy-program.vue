<script setup lang="ts">
import BuddyMatch from '~/components/BuddyMatch.vue';
import type { Person } from '~/types/Person'
import type { Onboard } from '~/types/Onboard'

const { search } = useAlgoliaSearch<Person>('People')
const { data: newEmployees } = await useAsyncData('NewEmployees', () => search({
  query: '',
  requestOptions: {
    facetFilters: [`Type:New-employee`]
  }
}), {
  transform: (data) => data.hits
})

const { data: onboardedData } = await useFetch('/api/get-onboarding', {
  transform:
    (data) => groupByFunc(([...(data as any).results] as Onboard[]),
      onboard =>
        onboard.properties.NewEmployeeMail.title[0].text.content
      )
})

const getBuddyEmail = (onboards?: Onboard[]) =>
  // @ts-ignore
  onboards?.toSorted((onboard1, onboard2) => onboard2.created_time - onboard1.created_time)?.[0]?.properties?.BuddyEmail?.email

</script>

<template>
  <div class="pl-10 pr-5 flex flex-col gap-y-[10px]">
    <BuddyMatch
      v-for="newEmployee of newEmployees"
      :new-employee="newEmployee"
      :buddy-email="getBuddyEmail(onboardedData?.[newEmployee.Email]) ?? null"
    />
  </div>
</template>
