<template>
  <div class="bg-[url('/background.png')] bg-cover">
    <Sidebar class="fixed top-0 left-0 bottom-0"/>
    <div class=" pl-[377px] min-h-screen">
        <Header />
        <slot />
    </div>
  </div>
</template>
