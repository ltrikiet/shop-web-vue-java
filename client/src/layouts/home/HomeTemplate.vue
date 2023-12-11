<script setup lang="ts">
import HomeNavbar from './HomeNavbar.vue';
import HomeFooter from './HomeFooter.vue';
import HomeCart from './HomeCart.vue';
</script>
<template>
  <v-app>
    <home-navbar />
    <home-cart />

    <v-main class="flex flex-col">
      <slot />
    </v-main>

    <home-footer />
  </v-app>
</template>
