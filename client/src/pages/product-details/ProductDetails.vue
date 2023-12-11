<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import HomeTemplate from '@/layouts/home/HomeTemplate.vue';
import { useProductsStore } from '@/stores/productsStore';
import AsyncImg from '@/components/async-img/AsyncImg.vue';
import { storeToRefs } from 'pinia';
import { useCartStore } from '@/stores/cartStore';
import { ref } from 'vue';

const route = useRoute();
const productsStore = useProductsStore();
const cartStore = useCartStore();
const { productDetails } = storeToRefs(productsStore);

onMounted(async () => {
  if (route.params.id) {
    await productsStore.getProductDetails(route.params.id as string);
  }
});

const quanity = ref<number>(0);

const handleClickMinus = () => {
  if (quanity.value > 0) {
    quanity.value = quanity.value - 1;
  }
};

const handleClickPlus = (stocks: number) => {
  if (stocks > quanity.value) {
    quanity.value = quanity.value + 1;
  }
};
</script>
<template>
  <home-template>
    <v-container class="pt-0">
      <v-breadcrumbs
        class="mt-5"
        :items="[
          { title: 'Home', to: { name: 'home' } },
          { title: 'Product list', to: { name: 'product-list' } },
          `${productDetails?.fullName}`
        ]"
      />
      <v-row no-gutters class="!mb-10 flex justify-between">
        <v-col cols="5">
          <div class="mt-5"><async-img :path="productDetails?.picture" /></div>
        </v-col>
        <v-col cols="5">
          <div class="mt-5">
            <v-sheet rounded="t-lg" class="flex flex-col">
              <div class="p-6 border-b-2 border-dashed">
                <p class="text-xs tracking-widest mb-4">REVIEWS:</p>
                <div class="flex items-top justify-center">
                  <v-rating readonly :length="5" :size="32" :model-value="productDetails?.ranking" />
                  <span class="mb-1 ml-3 font-medium">(10)</span>
                </div>
              </div>
              <div class="p-6 border-b-2 border-dashed">
                <p class="text-xs tracking-widest mb-4">PRICE:</p>
                <p class="text-center text-3xl tracking-widest">${{ productDetails?.price }}</p>
              </div>
              <div class="py-6 pl-6 flex justify-between items-center">
                <p class="text-xs tracking-widest">QUANTITY:</p>
                <div class="flex items-center">
                  <v-btn icon="mdi-minus" variant="plain" @click="handleClickMinus()" />
                  <v-text-field class="w-16" hide-details readonly v-model="quanity" />
                  <v-btn icon="mdi-plus" variant="plain" @click="handleClickPlus(productDetails?.stocks as number)" />
                </div>
              </div>
            </v-sheet>
            <v-btn
              block
              class="rounded-b-lg !rounded-t-none"
              size="x-large"
              color="grey-darken-3"
              @click="
                () => {
                  cartStore.addProductToCart(productDetails as any, quanity);
                  quanity = 0;
                }
              "
            >
              ADD TO CART
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <v-row no-gutters class="!mb-24">
        <v-col cols="10">
          <v-sheet rounded="lg">
            <div v-html="productDetails?.description" class="product-details__description p-10"></div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </home-template>
</template>

<style lang="scss" scoped>
.product-details {
  &__description {
    :deep(h1) {
      @apply text-3xl font-light tracking-wide;
    }
    :deep(h2) {
      @apply text-2xl mt-8 font-light tracking-wide;
    }
    :deep(p) {
      @apply mt-2 tracking-wider;
    }
    :deep(img) {
      @apply rounded-md;
    }
  }
}
</style>
