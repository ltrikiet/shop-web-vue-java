<script setup lang="ts">
import HomeTemplate from '@/layouts/home/HomeTemplate.vue';
import HomeBanner from './HomeBanner.vue';
import HomeNewArrival from './HomeNewArrival.vue';
import HomeBestSellers from './HomeBestSellers.vue';
import HomeFeedback from './HomeFeedback.vue';
import HomeCategoryCards from './HomeCategoryCards.vue';
</script>
<template>
  <home-template>
    <home-banner />

    <home-new-arrival />

    <home-best-sellers />

    <home-category-cards />

    <home-feedback />
  </home-template>
</template>
