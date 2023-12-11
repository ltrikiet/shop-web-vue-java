<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore';
import { navList } from './constant';

const authStore = useAuthStore();

const handleClickLogout = () => {
  authStore.logout();
};
</script>
<template>
  <v-app>
    <v-layout>
      <v-app-bar class="relative px-3">
        <div class="flex flex-col items-center">
          <router-link to="/">
            <p class="font-bold text-3xl">Vuefly</p>
          </router-link>
        </div>
      </v-app-bar>

      <v-navigation-drawer permanent>
        <v-list nav>
          <template v-for="item in navList" :key="item.title">
            <v-list-item
              v-if="!item.children"
              exact
              :prepend-icon="item.icon"
              :title="item.title"
              :value="item.value"
              :to="item.to"
            />

            <v-list-group v-if="item.children" :value="item.value">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" :title="item.title" :prepend-icon="item.icon"></v-list-item>
              </template>

              <v-list-item
                v-for="childItem in item.children"
                :key="childItem.title"
                :title="childItem.title"
                :value="childItem.value"
                :to="childItem.to"
              />
            </v-list-group>
          </template>
        </v-list>
        <template v-slot:append>
          <div class="pa-2">
            <v-btn block variant="tonal" @click="handleClickLogout"> Logout </v-btn>
          </div>
        </template>
      </v-navigation-drawer>

      <v-main>
        <slot />
      </v-main>
    </v-layout>
  </v-app>
</template>
