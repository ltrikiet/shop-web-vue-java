<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
</script>
<template>
  <swiper
    :slidesPerView="2"
    :spaceBetween="30"
    :loop="true"
    :centeredSlides="true"
    :slidesOffsetBefore="70"
    class="home-coffee-cards"
    :navigation="{
      nextEl: '.custom-coffee-cards-next',
      prevEl: '.custom-coffee-cards-prev'
    }"
  >
    <swiper-slide v-for="n of 10" :key="n">
      <div class="home-coffee-cards__slide">
        <div class="home-coffee-cards__slide-left">
          <div>
            <h4 class="text-2xl font-light tracking-wider">Pumpkin Pie Latte</h4>
            <p>Seasonal "Beverage</p>
          </div>
          Image by

          <v-img src="./src/assets/images/DrinkModule_PumpkinPieLatte_750x.png" />
          <p class="text-xs font-medium mb-2">12 oz Ceramic Cup</p>
          <ul>
            <li>
              <v-icon icon="mdi-square-medium-outline" />
              <p>8.5 oz Steamed Milk</p>
            </li>
            <li>
              <v-icon icon="mdi-square-medium-outline" />
              <p>40 grams Pumpkin Pie Base</p>
            </li>
            <li>
              <v-icon icon="mdi-square-medium-outline" />
              <p>2 oz Espresso</p>
            </li>
          </ul>
        </div>
        <div class="home-coffee-cards__slide-right">
          <p class="mb-3">
            Add about 40 grams of Pumpkin Pie Base directly into a 12 oz ceramic cup with a double shot of espresso.
            Steam milk and pour beautiful latte art. Garnish with graham cracker crumble.
          </p>
          <p>
            Add about 40 grams of Pumpkin Pie Base directly into a 12 oz ceramic cup with a double shot of espresso.
            Steam milk and pour beautiful latte art. Garnish with graham cracker crumble.
          </p>
          <v-btn variant="plain" appendIcon="mdi-chevron-right">TRY ONE TODAY</v-btn>
        </div>
      </div>
    </swiper-slide>
    <div class="home-coffee-cards__button-group">
      <div class="home-coffee-cards__button-group-wrapper">
        <v-btn class="custom-coffee-cards-prev" variant="plain" icon>
          <v-icon icon="mdi-chevron-left" />
        </v-btn>
        <v-btn class="custom-coffee-cards-next" variant="plain" icon>
          <v-icon icon="mdi-chevron-right" />
        </v-btn>
      </div>
    </div>
  </swiper>
</template>
<style lang="scss" scoped>
.home-coffee-cards {
  @apply h-[450px] py-14 mb-20 mt-10;

  &__slide {
    @apply w-[600px] h-[380px] bg-slate-500 rounded-md flex;
    &-left {
      @apply flex flex-1 flex-col justify-between p-5;
      ul > li {
        @apply flex items-center;
        p {
          @apply text-sm font-medium mb-[0.15rem];
        }
      }
    }
    &-right {
      @apply flex flex-col justify-between border-l-2 flex-1 border-dashed p-5 tracking-widest;
    }
  }

  &__button-group {
    @apply absolute w-full top-1/2 z-50;
    &-wrapper {
      @apply flex justify-between mx-auto w-1/2;
    }
  }
}

.swiper-slide-next,
.swiper-slide-prev {
  transition: all 0.5s ease-out;
}
.swiper-slide-prev {
  transform: rotate(-5deg);
}
.swiper-slide-active {
  transform: rotate(0deg);
  transition: all 1s ease-out;
}
.swiper-slide-next {
  transform: rotate(5deg);
}
</style>
