<script setup lang="ts">
import HomeNavbar from './home-navbar/HomeNavbar.vue';
import HomeFooter from './home-footer/HomeFooter.vue';
</script>
<template>
  <div class="flex flex-col w-full">
    <home-navbar />
    <v-main class="mt-32">
      <slot />
    </v-main>
    <home-footer />
  </div>
</template>
