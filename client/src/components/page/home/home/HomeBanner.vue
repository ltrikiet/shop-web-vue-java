<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
</script>
<template>
  <div class="home-banner">
    <div class="home-banner-left">
      <h1 class="home-banner-left__title">FOR THOSE WHO DARE</h1>
      <span class="home-banner-left__description">
        The Republic of Gamers is a proving ground to chase excellence and push limits. Each battle scar is a badge of
        honor—the price of victory.
      </span>
      <div>
        <v-btn size="x-large"> SHOP BEST SELLERS </v-btn>
      </div>
    </div>
    <div class="home-banner-right">
      <swiper :loop="true" :autoplay="true">
        <swiper-slide v-for="n of 5" :key="n">
          <v-img cover aspect-ratio="16/9" :src="`./src/assets/images/home-banner-${n}.jpg`" height="500" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home-banner {
  @apply flex;
  &-left {
    @apply w-4/12 bg-gray-800 flex flex-col justify-center p-10;
    &__title {
      @apply text-5xl font-light tracking-widest;
    }
    &__description {
      @apply my-5 text-lg tracking-widest;
    }
  }
  &-right {
    @apply w-8/12;
  }
}
</style>
