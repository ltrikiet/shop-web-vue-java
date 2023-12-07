<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
</script>
<template>
  <div class="home-feedback">
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: true
      }"
      :navigation="{ nextEl: '.custom-feedback-next', prevEl: '.custom-feedback-prev' }"
      :pagination="{
        type: 'fraction',
        el: '.custom-feedback-pagination'
      }"
      :cssMode="true"
    >
      <swiper-slide v-for="n of 5" :key="n">
        <div class="home-feedback__slide">
          <h3 class="home-feedback__slide-title">“I AM SO HAPPY I STARTED DRINKING THIS COFFEE”</h3>
          <p class="home-feedback__slide-description">
            I am so happy I started drinking this coffee. This is the first time I have not had to
            deal with acid issues or coffee making me feel sick after drinking it. I have not had
            that issue once with this coffee and that's a big deal to me
          </p>
          <p class="home-feedback__slide-user">MASSI B.</p>
        </div>
      </swiper-slide>

      <div class="home-feedback__button-group">
        <v-btn class="custom-feedback-prev" variant="plain" icon>
          <v-icon icon="mdi-chevron-left" />
        </v-btn>
        <div class="custom-feedback-pagination !w-8"></div>
        <v-btn class="custom-feedback-next" variant="plain" icon>
          <v-icon icon="mdi-chevron-right" />
        </v-btn>
      </div>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
.home-feedback {
  background-color: rgb(var(--v-theme-kbd));
  @apply py-20 px-52;

  &__slide {
    @apply flex flex-col justify-center items-center text-center h-[350px];
    &-title {
      @apply font-extrabold text-6xl;
    }
    &-description {
      @apply text-xl my-10;
    }
    &-user {
      @apply font-extrabold;
    }
  }

  &__button-group {
    @apply flex justify-center items-center gap-4 px-4 w-full;
  }
}
</style>
