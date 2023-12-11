<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCartStore } from '@/stores/cartStore';
import { useAuthStore } from '@/stores/authStore';
import AsyncImg from '@/components/async-img/AsyncImg.vue';
import router from '@/router';

const cartStore = useCartStore();
const authStore = useAuthStore();
const { cart, cartCount, cartTotal, isOpenCartSidebar } = storeToRefs(cartStore);
const { userToken } = storeToRefs(authStore);

const handleCheckoutClick = () => {
  if (userToken.value) {
    router.push('/payment');
  } else {
    router.push('/login');
  }
};
</script>
<template>
  <v-navigation-drawer v-model="isOpenCartSidebar" temporary location="right" width="500">
    <div class="flex flex-col h-full">
      <div class="px-5 py-3 border-b-2 flex justify-between items-center">
        <p class="text-2xl">Cart ({{ cartCount }})</p>
        <v-btn icon="mdi-close" variant="plain" size="small" @click="cartStore.handleClickOpenCartSidebar()" />
      </div>
      <div class="flex-1 border-b-2 overflow-auto">
        <ul>
          <li class="flex pt-5 px-5" v-for="cartProduct in cart">
            <div class="w-32 h-32">
              <async-img :path="cartProduct.picture" />
            </div>
            <div class="ml-3 w-80">
              <div class="flex">
                <p class="text-xl font-light">{{ cartProduct.fullName }}</p>
                <v-btn
                  icon="mdi-delete"
                  variant="plain"
                  @click="cartStore.handleClickDeleteCartProduct(cartProduct.productId)"
                />
              </div>
              <div class="flex justify-between items-center mt-5">
                <div class="flex w-40">
                  <v-btn
                    icon="mdi-minus"
                    variant="plain"
                    @click="cartStore.handleClickMinusProductQuantity(cartProduct.productId)"
                  />
                  <v-text-field
                    hide-details
                    variant="outlined"
                    density="compact"
                    :model-value="cartProduct.quantity"
                    readonly
                  />
                  <v-btn
                    icon="mdi-plus"
                    variant="plain"
                    @click="cartStore.handleClickPlusProductQuantity(cartProduct.productId)"
                  />
                </div>
                <p class="text-xl">${{ cartProduct.price * cartProduct.quantity }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="h-36 px-5 py-3">
        <div class="flex justify-between">
          <p class="text-2xl">TOTAL</p>
          <p class="text-2xl">${{ cartTotal }}</p>
        </div>
        <v-btn block class="mt-5" size="50" color="blue-grey-lighten-4" @click="handleCheckoutClick">CHECK OUT</v-btn>
      </div>
    </div>
  </v-navigation-drawer>
</template>
