<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { Swiper, SwiperSlide } from 'swiper/vue';
import AsyncImg from '@/components/async-img/AsyncImg.vue';
import { useCategoriesStore } from '@/stores/categoriesStore';

const categoriesStore = useCategoriesStore();
const { activeCategories } = storeToRefs(categoriesStore);

onMounted(async () => {
  await categoriesStore.getAllActiveCategories();
});
</script>
<template>
  <div>
    <h2 class="py-5 text-center font-bold text-4xl tracking-widest">CATEGORIES</h2>
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
      <swiper-slide v-for="category of activeCategories" :key="category.id">
        <div class="home-coffee-cards__slide">
          <div class="home-coffee-cards__slide-left">
            <div>
              <h4 class="text-2xl font-light tracking-wider">{{ category.fullName }}</h4>
            </div>
            <div>
              <async-img :path="category.picture" />
            </div>
          </div>
          <div class="home-coffee-cards__slide-right">
            <p>{{ category.description }}</p>
            <v-btn variant="plain" appendIcon="mdi-chevron-right">CHECK PRODUCTS</v-btn>
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
  </div>
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
