<script setup lang="ts">
import HomeTemplate from '@/components/template/home/HomeTemplate.vue';
import ProductDetailsLeft from './ProductDetailsLeft.vue';
import ProductDetailsMiddle from './ProductDetailsMiddle.vue';
import ProductDetailsRight from './ProductDetailsRight.vue';
</script>
<template>
  <home-template>
    <v-container class="pt-0">
      <v-row no-gutters class="!mb-10 flex justify-between">
        <v-col cols="2">
          <product-details-left />
        </v-col>
        <v-col cols="5">
          <product-details-middle />
        </v-col>
        <v-col cols="3">
          <product-details-right />
        </v-col>
      </v-row>

      <v-row no-gutters class="!mb-24">
        <v-col cols="3">
          <p class="text-3xl px-12 font-light">BEHIND THE CUP</p>
        </v-col>
        <v-col cols="5">
          <p class="text-lg tracking-wider">
            Bright citrus notes of tangerine and lemon candy pair with chamomile to make this year’s Colombia Anserma
            Natural a beautifully structured and delicate cup.Each bag contains 150 grams of whole bean coffee.
          </p>
        </v-col>
      </v-row>

      <v-row no-gutters class="!mb-24">
        <v-col cols="8">
          <v-sheet>
            <v-row no-gutters class="border-b-2 border-dashed">
              <v-col cols="8" class="flex">
                <div class="p-10">
                  <p class="mb-10 font-light text-3xl">BREWING SUGGESTIONS</p>
                  <div class="flex">
                    <img class="self-start mr-8" src="@/assets/svgs/icon-quote.svg" />
                    <div class="flex flex-col mr-14">
                      <p class="text-lg tracking-wider mb-10">
                        All of our coffees can be brewed in various ways, designed for your perfect morning. These
                        recipes are our favorite ways to highlight Anserma Natural. Your brewing adventure starts here.
                      </p>
                      <p class="font-medium tracking-widest">VERVE'S COFFEE DEPARTMENT</p>
                    </div>
                  </div>
                </div>
              </v-col>
              <v-col cols="4">
                <v-img cover src="https://dummyimage.com/273x407/000/fff" />
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col cols="4" v-for="n in 3" :key="n" :class="{ 'border-r-2 border-dashed': n !== 3 }">
                <div class="flex flex-col justify-center items-center pt-8 pb-10">
                  <p class="text-xl font-light">AEROPRESS</p>
                  <img src="@/assets/svgs/coffee-can.svg" />
                  <ul class="pt-5">
                    <li class="grid grid-cols-2 gap-x-10">
                      <span>Coffee</span>
                      <span>15 g</span>
                    </li>
                    <li class="grid grid-cols-2 gap-x-10">
                      <span>Grind</span>
                      <span>Med</span>
                    </li>
                    <li class="grid grid-cols-2 gap-x-10">
                      <span>Coffee</span>
                      <span>15 g</span>
                    </li>
                    <li class="grid grid-cols-2 gap-x-10">
                      <span>Water</span>
                      <span>225 g</span>
                    </li>
                    <li class="grid grid-cols-2 gap-x-10">
                      <span>Ratio</span>
                      <span>1:15</span>
                    </li>
                    <li class="grid grid-cols-2 gap-x-10">
                      <span>Time</span>
                      <span>3:00</span>
                    </li>
                  </ul>
                </div>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>

      <v-row no-gutters class="!mb-24">
        <v-col cols="8">
          <v-row no-gutters>
            <v-col cols="8">
              <div class="mr-36">
                <p class="font-light text-3xl mb-8">STORY</p>
                <p class="text-lg tracking-wider mb-6">
                  The Sermon has always been a new take on an old classic. A round body, bittersweet cocoa notes, and a
                  berry sweetness are what we consistently strive for. Each season, we taste dozens of offerings to find
                  the perfect combination to achieve this end.
                </p>
                <p class="text-lg tracking-wider">
                  Every year we cup hundreds of samples from our partners in Uganda, Ethiopia, and Colombia. Through
                  this effort, we find the best, not just in terms of coffee quality but also in complementary flavor
                  profiles.
                </p>
              </div>
            </v-col>
            <v-col cols="4">
              <v-sheet>
                <ul>
                  <li class="p-6 border-b-2 border-dashed">
                    <p class="text-xs tracking-widest mb-4">PRODUCER</p>
                    <p class="text-lg tracking-wider">VARIOUS PRODUCERS</p>
                  </li>
                  <li class="p-6 border-b-2 border-dashed">
                    <p class="text-xs tracking-widest mb-4">CULTIVAR</p>
                    <p class="text-lg tracking-wider">VARIES SEASONALLY</p>
                  </li>
                  <li class="p-6 border-b-2 border-dashed">
                    <p class="text-xs tracking-widest mb-4">PROCESSING METHOD</p>
                    <p class="text-lg tracking-wider">WASHED & NATURAL</p>
                  </li>
                  <li class="p-6">
                    <p class="text-xs tracking-widest mb-4">ELEVATION</p>
                    <p class="text-lg tracking-wider">1200-2000 METERS</p>
                  </li>
                </ul>
              </v-sheet>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </home-template>
</template>
