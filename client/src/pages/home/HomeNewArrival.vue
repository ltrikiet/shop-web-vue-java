<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { Swiper, SwiperSlide } from 'swiper/vue';
import vTextStyle from '@/directives/vTextStyle';
import AsyncImg from '@/components/async-img/AsyncImg.vue';
import { useProductsStore } from '@/stores/productsStore';
import { useCartStore } from '@/stores/cartStore';

const productStore = useProductsStore();
const cartStore = useCartStore();
const { newArrivalProducts } = storeToRefs(productStore);

onMounted(async () => {
  await productStore.getLatestProduct(8);
});
</script>

<template>
  <div class="w-full">
    <v-row no-gutters class="flex bg-gray-400 px-10 pt-16 pb-20 relative">
      <v-col cols="8">
        <swiper
          :slidesPerView="3"
          :spaceBetween="70"
          :pagination="{
            el: '.custom-new-arrival-pagination',
            type: 'fraction'
          }"
          :navigation="{ nextEl: '.custom-new-arrival-next', prevEl: '.custom-new-arrival-prev' }"
        >
          <swiper-slide v-for="product of newArrivalProducts" :key="product.id" class="!w-[256px]">
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <v-card v-bind="props">
                  <async-img :path="product.picture" />
                  <p class="absolute top-0 right-0 p-3 bg-yellow-800">NEW ARRIVAL</p>
                  <span
                    class="absolute bottom-0 left-0 text-center w-full bg-gray-200 text-gray-900 font-bold p-2 tracking-widest cursor-pointer"
                    style="transition: all 0.5s"
                    :class="isHovering ? 'opacity-100' : 'opacity-0'"
                    @click="cartStore.addProductToCart(product)"
                  >
                    QUICK ADD
                  </span>
                </v-card>
                <div>
                  <p class="mt-3 font-light text-2xl">{{ product.fullName }}</p>
                  <p class="mt-3 text-xl">${{ product.price }}</p>
                </div>
              </template>
            </v-hover>
          </swiper-slide>
        </swiper>
        <div class="absolute bottom-4 left-2 z-[3]">
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
      </v-col>
      <v-col cols="4">
        <div class="p-10 flex flex-col justify-center">
          <h2 v-text-style="'h2'">ROG PRODUCTS TO KEEP YOUR FIGHT</h2>
          <span class="my-5" v-text-style="'paragraph'">
            We call on those who dare to venture forward and face their fears. If you pledge to be true to yourself and
            fight for those in need, the Republic of Gamers calls on you.
          </span>
          <div>
            <v-btn size="x-large"> CHECK PRODUCTS </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
