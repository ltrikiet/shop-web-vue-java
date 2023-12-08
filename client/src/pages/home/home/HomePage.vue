<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import HomeTemplate from '@/layouts/home/HomeTemplate.vue';
import { useHomeStore } from '@/stores/homeStore';
import HomeBanner from './HomeBanner.vue';
import HomeNewArrival from './HomeNewArrival.vue';
import HomeBestSellers from './HomeBestSellers.vue';
import HomeFeedback from './HomeFeedback.vue';
import HomeCategoryCards from './HomeCategoryCards.vue';

const homeStore = useHomeStore();
const { categories } = storeToRefs(homeStore);

onMounted(async () => await homeStore.getAllActiveCategories());
</script>
<template>
  <home-template>
    <home-banner />

    <home-new-arrival />

    <home-best-sellers />

    <home-category-cards :categories="categories" />

    <home-feedback />
  </home-template>
</template>
