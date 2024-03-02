<script setup lang="ts">
defineProps<{
  name: string
  role: string
}>()
</script>

<template>
  <div class="py-4 px-6 flex gap-x-6">
    <div class="">
      <img src="/marialuisa.png" />
    </div>
    <div>
      <p>{{ name }}</p>
      <p>{{ role }}</p>
    </div>
  </div>
</template>
