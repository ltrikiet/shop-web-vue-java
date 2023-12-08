<script setup lang="ts">
import useHomeLayout from '@/hooks/useHomeLayout';
import HomeNavbarCart from './HomeNavbarCart.vue';

const { handleCartIconClick, handleAccountIconClick } = useHomeLayout();
</script>
<template>
  <div class="header-wrapper">
    <v-toolbar class="v-toolbar header relative px-3 py-4">
      <v-spacer />
      <div class="flex flex-col items-center">
        <p class="font-bold text-3xl">Vuefly</p>
        <p class="text-xs tracking-[0.2rem]">Republic of Gamers</p>
      </div>
      <v-spacer />

      <div class="absolute right-0 top-3">
        <v-btn icon="mdi-magnify" />
        <v-btn icon="mdi-account-outline" @click="handleAccountIconClick" />
        <v-btn icon="mdi-cart-outline" @click="handleCartIconClick" />
      </div>
    </v-toolbar>
    <nav class="header-nav">
      <v-menu open-on-hover width="100%">
        <template v-slot:activator="{ props }">
          <v-btn class="font-semibold" size="x-large" v-bind="props" variant="plain" v-bind:ripple="false">
            LAPTOP
          </v-btn>
        </template>

        <div class="header-nav-menu w-full p-10">
          <v-row>
            <v-col cols="3">
              <h2 class="text-3xl font-light mb-6">LAPTOP GAMMING</h2>
              <div class="flex justify-between">
                <ul>
                  <li class="mb-2 font-medium tracking-[0.25rem]">SHOP ALL</li>
                  <li class="mb-2 font-medium tracking-[0.25rem]">SINGLE ORIGINS</li>
                  <li class="mb-2 font-medium tracking-[0.25rem]">BLENDS</li>
                  <li class="mb-2 font-medium tracking-[0.25rem]">CRAFT INSTANT</li>
                  <li class="mb-2 font-medium tracking-[0.25rem]">FLASH BREW</li>
                </ul>
                <v-divider class="mx-2" vertical :thickness="3" />
              </div>
            </v-col>

            <v-col cols="9">
              <div class="flex justify-between">
                <div v-for="n in 3" :key="n">
                  <v-img cover width="314" height="236" :src="`./src/assets/images/gamming-laptop-${n}.jpg`" />
                  <v-btn class="tracking-wider" color="blue-grey-darken-2" block>
                    <span class="font-medium">SHOP BEST SELLERS</span>
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-menu>

      <v-menu open-on-hover width="100%">
        <template v-slot:activator="{ props }">
          <v-btn class="font-semibold" size="x-large" v-bind="props" variant="plain" v-bind:ripple="false"> PC </v-btn>
        </template>

        <div class="header-nav-menu w-full p-10">
          <v-row>
            <v-col cols="3">
              <h2 class="text-3xl font-light mb-6">PC GAMING</h2>
              <div class="flex justify-between">
                <ul>
                  <li class="mb-2 font-medium tracking-[0.25rem]">SHOP ALL</li>
                  <li class="mb-2 font-medium tracking-[0.25rem]">SINGLE ORIGINS</li>
                  <li class="mb-2 font-medium tracking-[0.25rem]">BLENDS</li>
                  <li class="mb-2 font-medium tracking-[0.25rem]">CRAFT INSTANT</li>
                  <li class="mb-2 font-medium tracking-[0.25rem]">FLASH BREW</li>
                </ul>
                <v-divider class="mx-2" vertical :thickness="3" />
              </div>
            </v-col>

            <v-col cols="9">
              <div class="flex justify-between">
                <div v-for="n in 3" :key="n">
                  <v-img cover width="314" height="236" :src="`./src/assets/images/gamming-pc-${n}.jpg`" />
                  <v-btn class="tracking-wider" color="blue-grey-darken-2" block>
                    <span class="font-medium">SHOP BEST SELLERS</span>
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-menu>

      <v-menu open-on-hover width="100%">
        <template v-slot:activator="{ props }">
          <v-btn class="font-semibold" size="x-large" v-bind="props" variant="plain" v-bind:ripple="false">
            MONITOR
          </v-btn>
        </template>

        <div class="header-nav-menu w-full p-10">
          <v-row>
            <v-col cols="3">
              <h2 class="text-3xl font-light mb-6">MONITOR</h2>
              <div class="flex justify-between">
                <ul>
                  <li class="mb-2 font-medium tracking-[0.25rem]">SHOP ALL</li>
                  <li class="mb-2 font-medium tracking-[0.25rem]">SINGLE ORIGINS</li>
                  <li class="mb-2 font-medium tracking-[0.25rem]">BLENDS</li>
                  <li class="mb-2 font-medium tracking-[0.25rem]">CRAFT INSTANT</li>
                  <li class="mb-2 font-medium tracking-[0.25rem]">FLASH BREW</li>
                </ul>
                <v-divider class="mx-2" vertical :thickness="3" />
              </div>
            </v-col>

            <v-col cols="9">
              <div class="flex justify-between">
                <div v-for="n in 3" :key="n">
                  <v-img cover width="314" height="236" :src="`./src/assets/images/gamming-monitor-${n}.jpg`" />
                  <v-btn class="tracking-wider" color="blue-grey-darken-2" block>
                    <span class="font-medium">SHOP BEST SELLERS</span>
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-menu>

      <v-btn class="font-semibold" size="x-large" variant="plain" v-bind:ripple="false"> GAMING GEAR </v-btn>
      <v-btn class="font-semibold" size="x-large" variant="plain" v-bind:ripple="false"> LOCATION </v-btn>
    </nav>
  </div>

  <home-navbar-cart />
</template>

<style scoped>
.header-wrapper {
  position: fixed;
  width: 100%;
  z-index: 100;
}
.header-nav {
  background: rgb(var(--v-theme-on-background));
  color: rgb(var(--v-theme-background));
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
}

.header-nav-menu {
  background: rgb(var(--v-theme-surface));
}
</style>
@/hook/useHomeLayout
