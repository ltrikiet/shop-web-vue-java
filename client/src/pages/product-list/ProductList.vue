<script setup lang="ts">
import { onMounted } from 'vue';
import HomeTemplate from '@/layouts/home/HomeTemplate.vue';
import AsyncImg from '@/components/async-img/AsyncImg.vue';
import { useProductsStore } from '@/stores/productsStore';
import { storeToRefs } from 'pinia';

const productsStore = useProductsStore();
const { activeProducts } = storeToRefs(productsStore);

onMounted(async () => await productsStore.getAllActiveProducts());
</script>
<template>
  <home-template>
    <v-container class="my-8">
      <h2 class="text-3xl font-light mb-8">ALL PRODUCTS</h2>
      <v-btn class="mb-4" prepend-icon="mdi-tune" size="large" variant="outlined">FILTER</v-btn>
      <div class="mb-10"></div>

      <div class="flex justify-between items-center tracking-widest">
        <p>PRODUCTS ({{ activeProducts.length }})</p>
        <div class="flex items-center">
          <p class="mt-[0.05rem] mr-1">SORT BY:</p>
          <v-menu location="bottom">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" variant="plain" append-icon="mdi-chevron-down"> BEST SELLING </v-btn>
            </template>

            <v-list>
              <v-list-item> ABC </v-list-item>
              <v-list-item> DEF </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>

      <v-container class="bg-surface-variant">
        <v-row no-gutters>
          <v-col v-for="product in activeProducts" :key="product.id" cols="12" sm="4">
            <router-link :to="{ name: 'product-details', params: { id: product.id } }">
              <v-sheet class="ma-2 pa-2">
                <async-img :path="product.picture" />
              </v-sheet>
              <div class="ma-3">
                <h3 class="font-light text-2xl">{{ product.fullName }}</h3>
                <p class="my-3 text-xs font-medium tracking-widest">{{ product.supplier.fullName }}</p>
                <p class="text-xl">${{ product.price }}</p>
              </div>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </home-template>
</template>
