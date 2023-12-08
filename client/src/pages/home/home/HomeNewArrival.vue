<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
</script>

<template>
  <div class="home-new-arrival">
    <div class="home-new-arrival-left">
      <swiper
        :slidesPerView="3"
        :spaceBetween="70"
        :pagination="{
          el: '.custom-new-arrival-pagination',
          type: 'fraction'
        }"
        :navigation="{ nextEl: '.custom-new-arrival-next', prevEl: '.custom-new-arrival-prev' }"
      >
        <swiper-slide v-for="n of 5" :key="n" class="!w-[256px]">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-card v-bind="props">
                <v-img cover width="256" height="350" src="https://dummyimage.com/256x350/000/fff" />
                <p class="absolute top-0 right-0 p-3 bg-yellow-800">NEW ARRIVAL</p>
                <span
                  class="absolute bottom-0 left-0 text-center w-full bg-gray-200 text-gray-900 font-bold p-2 tracking-widest cursor-pointer"
                  style="transition: all 0.5s"
                  :class="isHovering ? 'opacity-100' : 'opacity-0'"
                >
                  QUICK ADD
                </span>
              </v-card>
            </template>
          </v-hover>
        </swiper-slide>
      </swiper>
      <div class="absolute w-full bottom-8 left-2 z-[3]">
        <div class="flex items-center gap-4 px-4">
          <v-btn class="custom-new-arrival-prev" variant="plain" icon>
            <v-icon icon="mdi-chevron-left" />
          </v-btn>
          <div class="custom-new-arrival-pagination !w-8"></div>
          <v-btn class="custom-new-arrival-next" variant="plain" icon>
            <v-icon icon="mdi-chevron-right" />
          </v-btn>
        </div>
      </div>
    </div>
    <div class="home-new-arrival-right">
      <h1 class="text-4xl font-light tracking-widest">ROG PRODUCTS TO KEEP YOUR FIGHT</h1>
      <span class="my-5 text-xl">
        We call on those who dare to venture forward and face their fears. If you pledge to be true to yourself and
        fight for those in need, the Republic of Gamers calls on you.
      </span>
      <div>
        <v-btn size="x-large"> SHOP NEW COFFEES </v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-new-arrival {
  @apply flex bg-gray-400 px-10 pt-16 pb-28 relative;
  &-left {
    @apply w-8/12 flex justify-center items-center;
  }
  &-right {
    @apply w-4/12 flex flex-col justify-center p-10;
  }
}
</style>
