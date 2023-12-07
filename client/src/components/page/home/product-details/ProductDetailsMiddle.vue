<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
</script>
<template>
  <v-breadcrumbs
    class="pt-10 px-5 text-xs tracking-widest"
    :items="['HOME', 'ALL COFFEE', 'ANSERMA NATURAL FARMLEVEL RESERVE']"
  />
  <swiper
    class="mt-5 relative"
    :pagination="{
      type: 'fraction'
    }"
    :navigation="{
      nextEl: '.custom-product-details-middle-next',
      prevEl: '.custom-product-details-middle-prev'
    }"
  >
    <swiper-slide v-for="n in 5" :key="n">
      <v-img cover src="https://dummyimage.com/513x567/000/fff" />
    </swiper-slide>

    <div class="absolute top-1/2 z-30 flex justify-between w-full">
      <v-btn class="custom-product-details-middle-prev" variant="plain" icon>
        <v-icon icon="mdi-chevron-left" />
      </v-btn>
      <v-btn class="custom-product-details-middle-next" variant="plain" icon>
        <v-icon icon="mdi-chevron-right" />
      </v-btn>
    </div>
  </swiper>
</template>
