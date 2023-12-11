<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { Field as VeeValidateField, Form as VeeValidateForm } from 'vee-validate';
import { useCartStore } from '@/stores/cartStore';
import AsyncImg from '@/components/async-img/AsyncImg.vue';
import { useAuthStore } from '@/stores/authStore';
import { useOrdersStore } from '@/stores/ordersStore';

const cartStore = useCartStore();
const authStore = useAuthStore();
const orderStore = useOrdersStore();
const { cart, cartTotal } = storeToRefs(cartStore);
const { userToken, userInfo } = storeToRefs(authStore);

onMounted(async () => await authStore.getUserInfoByToken(userToken.value));

const handleSubmitFomm = (values: any) => {
  orderStore.createOrder({
    email: values.email,
    paymentMethod: values.paymentMethod,
    cartProducts: cart.value
  });
};
</script>
<template>
  <v-app>
    <v-main>
      <v-row no-gutters>
        <v-col cols="7" class="border-r-2">
          <div class="pt-10 px-16">
            <div>
              <p class="font-bold text-3xl">Vuefly</p>
              <p class="text-xs tracking-[0.2rem]">Republic of Gamers</p>

              <v-breadcrumbs :items="['Cart', 'Payment']" class="pl-0">
                <template v-slot:divider>
                  <v-icon icon="mdi-chevron-right"></v-icon>
                </template>
              </v-breadcrumbs>
            </div>
            <vee-validate-form as="v-form" @submit="handleSubmitFomm">
              <p class="text-4xl font-light mb-3">CONTACT</p>
              <div class="text-subtitle-1 text-medium-emphasis">Email</div>
              <vee-validate-field
                as="v-text-field"
                name="email"
                placeholder="EMAIL"
                density="comfortable"
                readonly
                variant="outlined"
                :model-value="userInfo?.email"
              />

              <p class="text-4xl font-light mt-5 mb-3">SHIPPING ADDRESS</p>
              <div class="text-subtitle-1 text-medium-emphasis">Fullname</div>
              <vee-validate-field
                as="v-text-field"
                name="fullName"
                placeholder="FULLNAME"
                density="comfortable"
                readonly
                variant="outlined"
                :model-value="userInfo?.fullName"
              />

              <div class="text-subtitle-1 text-medium-emphasis">Address</div>
              <vee-validate-field
                as="v-text-field"
                name="address"
                placeholder="ADDRESS"
                density="comfortable"
                readonly
                variant="outlined"
                :model-value="userInfo?.address"
              />

              <div class="text-subtitle-1 text-medium-emphasis">City</div>
              <vee-validate-field
                as="v-text-field"
                name="city"
                placeholder="CITY"
                density="comfortable"
                readonly
                variant="outlined"
                :model-value="userInfo?.city"
              />

              <div class="text-subtitle-1 text-medium-emphasis">Phone</div>
              <vee-validate-field
                as="v-text-field"
                name="phone"
                placeholder="PHONE"
                density="comfortable"
                readonly
                variant="outlined"
                :model-value="userInfo?.phone"
              />

              <p class="text-4xl font-light mt-5 mb-3">PAYMENT</p>
              <div class="text-subtitle-1 text-medium-emphasis">Payment Method</div>
              <vee-validate-field
                as="v-select"
                name="paymentMethod"
                placeholder="PAYMENT METHOD"
                density="comfortable"
                variant="outlined"
                :items="['Cash']"
              />

              <div class="flex justify-between items-center w-full">
                <v-btn prepend-icon="mdi-chevron-left" variant="plain" to="/">Return to Home</v-btn>
                <v-btn width="200" height="50" type="submit" class="my-7">PURCHASE</v-btn>
              </div>
            </vee-validate-form>
          </div>
        </v-col>
        <v-col cols="5">
          <div class="p-5 mt-10">
            <ul>
              <li class="flex pt-5 px-5" v-for="cartProduct in cart">
                <v-badge :content="cartProduct.quantity">
                  <div class="w-20 h-20">
                    <async-img :path="cartProduct.picture" />
                  </div>
                </v-badge>

                <div class="ml-3 flex items-center w-full justify-between">
                  <p class="text-lg font-light">{{ cartProduct.fullName }}</p>
                  <p class="pl-4">${{ cartProduct.price * cartProduct.quantity }}</p>
                </div>
              </li>
            </ul>
            <v-divider class="m-10" />
            <div class="px-10 flex justify-between">
              <p class="font-medium text-2xl">Total</p>
              <p class="text-xl font-light">${{ cartTotal }}</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
