<script setup lang="ts">
const data = {
  profileCard: {
    name: 'Marialuisa Pes',
    role: 'HR Business Partner'
  },
  description: 'Sognatrice Instancabile, Ballerina di Parole.'
}
</script>

<template>
  <div class="bg-[rgba(255,255,255,0.4)] w-[377px] pt-20 px-5 pb-5 h-screen flex flex-col justify-between">
    <div>
      <ProfileCard :="data.profileCard" />
      <p class="p-6">{{ data.description }}</p>

      <MenuItems />
    </div>

    <div class="flex gap-x-2 items-center px-6 py-4">
      <IconLogout />
      <span>Logout</span>
    </div>
  </div>
</template>
