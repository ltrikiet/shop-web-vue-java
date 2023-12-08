<script setup lang="ts">
import { ref } from 'vue';

const tab = ref();
</script>
<template>
  <div class="home-best-seller">
    <h2 class="home-best-seller__title">TOP BEST SELLERS</h2>
    <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
      <v-tab :value="1">Landscape</v-tab>
      <v-tab :value="2">City</v-tab>
      <v-tab :value="3">Abstract</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item v-for="n in 3" :key="n" :value="n">
        <v-container fluid>
          <v-row>
            <v-col v-for="i in 6" :key="i" cols="12" md="4">
              <v-img
                :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                aspect-ratio="1"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </div>
</template>

<style lang="scss" scoped>
.home-best-seller {
  @apply p-10;
  &__title {
    @apply py-5 text-center font-bold text-4xl tracking-widest;
  }
}
</style>
