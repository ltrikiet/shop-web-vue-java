<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
</script>
<template>
  <div class="w-full">
    <v-row no-gutters>
      <v-col class="bg-gray-800 flex flex-col justify-center" cols="4">
        <div class="p-10">
          <h1 class="text-5xl font-light tracking-widest mb-4">FOR THOSE WHO DARE</h1>
          <p class="my-5 text-lg tracking-widest mb-9">
            The Republic of Gamers is a proving ground to chase excellence and push limits. Each battle scar is a badge
            of honor—the price of victory.
          </p>
          <div>
            <v-btn size="x-large"> SHOP BEST SELLERS </v-btn>
          </div>
        </div>
      </v-col>
      <v-col cols="8">
        <swiper :loop="true" :autoplay="true">
          <swiper-slide v-for="n of 5" :key="n">
            <v-img cover aspect-ratio="16/9" :src="`./src/assets/images/home-banner-${n}.jpg`" height="500" />
          </swiper-slide>
        </swiper>
      </v-col>
    </v-row>
  </div>
</template>
