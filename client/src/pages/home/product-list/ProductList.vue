<script setup lang="ts">
import HomeTemplate from '@/layouts/home/HomeTemplate.vue';
</script>
<template>
  <home-template>
    <v-container class="my-8">
      <h2 class="text-3xl font-light mb-8">ALL COFFEE</h2>
      <v-btn class="mb-4" prepend-icon="mdi-tune" size="large" variant="outlined">FILTER</v-btn>

      <div class="flex justify-between items-center tracking-widest">
        <p>PRODUCTS (44)</p>
        <div class="flex items-center">
          <p class="mt-[0.05rem] mr-1">SORT BY:</p>
          <v-menu location="bottom">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" variant="plain" append-icon="mdi-chevron-down"> BEST SELLING </v-btn>
            </template>

            <v-list>
              <v-list-item> ABC </v-list-item>
              <v-list-item> DEF </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>

      <v-container class="bg-surface-variant">
        <v-row no-gutters>
          <v-col v-for="n in 44" :key="n" cols="12" sm="4">
            <v-sheet class="ma-2 pa-2">
              <v-img cover src="https://dummyimage.com/393x480/000/fff" />
            </v-sheet>
            <div class="ma-3">
              <h3 class="font-light text-2xl">Anserma Natural Farmlevel Reserve</h3>
              <p class="my-3 text-xs font-medium tracking-widest">TANGERINE . LEMON CANDY . CHAMOMILE</p>
              <p class="text-xl">$26.00</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </home-template>
</template>
