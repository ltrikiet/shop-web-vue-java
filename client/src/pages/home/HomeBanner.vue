<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import vTextStyle from '@/directives/vTextStyle';
</script>
<template>
  <div class="w-full">
    <v-row no-gutters>
      <v-col class="bg-gray-800 flex flex-col justify-center" cols="4">
        <div class="p-10">
          <h1 v-text-style="'h1'">FOR THOSE WHO DARE</h1>
          <p class="my-5 mb-9" v-text-style="'paragraph'">
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
