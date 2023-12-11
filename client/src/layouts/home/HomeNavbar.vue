<script setup lang="ts">
import router from '@/router';
import { useGlobalStore } from '@/stores/globalStore';
import { storeToRefs } from 'pinia';
import { useCartStore } from '@/stores/cartStore';

const globalStore = useGlobalStore();
const cartStore = useCartStore();
const { isLogin } = storeToRefs(globalStore);
const { cartCount } = storeToRefs(cartStore);

const handleAccountIconClick = () => {
  return isLogin.value ? router.push('/admin/home') : router.push('/login');
};
</script>
<template>
  <v-app-bar order="1" :flat="true" height="80">
    <v-spacer />
    <div class="flex flex-col items-center">
      <p class="font-bold text-3xl">Vuefly</p>
      <p class="text-xs tracking-[0.2rem]">Republic of Gamers</p>
    </div>
    <v-spacer />

    <div class="absolute right-5 flex">
      <v-btn icon="mdi-magnify" />
      <v-btn icon="mdi-account-outline" @click="handleAccountIconClick" />
      <v-btn icon @click="cartStore.handleClickOpenCartSidebar()">
        <v-badge :content="cartCount">
          <v-icon icon="mdi-cart-outline" />
        </v-badge>
      </v-btn>
    </div>
  </v-app-bar>
  <v-app-bar order="1" color="blue-grey-lighten-4" height="35">
    <v-spacer />
    <v-btn class="font-semibold" size="x-large" variant="plain">PC</v-btn>
    <v-btn class="font-semibold" size="x-large" variant="plain">LAPTOP</v-btn>
    <v-btn class="font-semibold" size="x-large" variant="plain">MONITOR</v-btn>
    <v-btn class="font-semibold" size="x-large" variant="plain">GAMING GEAR</v-btn>
    <v-btn class="font-semibold" size="x-large" variant="plain">LOCATION</v-btn>
    <v-spacer />
  </v-app-bar>
</template>
