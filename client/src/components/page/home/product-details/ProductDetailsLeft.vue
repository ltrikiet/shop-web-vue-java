<script setup lang="ts">
import ProductRoastLevel from './ProductRoastLevel.vue';
</script>
<template>
  <v-sheet class="px-2 py-6 text-center mb-14" color="grey-darken-1" rounded="b-lg">
    <p class="text-xs tracking-wider font-semibold mb-4">SINGLE ORIGIN - COLOMBIA</p>
    <p class="text-2xl font-light">ANSERMA NATURAL FARMLEVEL RESERVE</p>
  </v-sheet>
  <div class="flex flex-col mb-14">
    <p class="text-xs tracking-widest font-semibold mb-4">TASTING NOTES</p>
    <v-img cover src="./src/assets/images/Anserma-Natural-tasting-notes.webp" />
  </div>
  <div class="flex flex-col mb-14">
    <p class="text-xs tracking-widest font-semibold mb-4">ROAST LEVEL</p>
    <p class="text-2xl font-light self-center">LIGHT ROAST</p>
    <product-roast-level :level="2" />
  </div>
  <div class="flex flex-col mb-14">
    <p class="text-xs tracking-widest font-semibold mb-4">ORIGINS</p>
    <v-img cover class="mx-10 mb-2" src="./src/assets/images/colombia.png" />
    <p class="text-xs text-center tracking-[0.2rem] font-semibold">COLOMBIA</p>
  </div>
</template>
