<script setup lang="ts">
import { RouterView } from 'vue-router';
import SwiperCore from 'swiper';
import { Autoplay, FreeMode, Navigation, Pagination, EffectCards } from 'swiper/modules';
import '@mdi/font/css/materialdesignicons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/effect-cards';

SwiperCore.use([Navigation, Pagination, FreeMode, Autoplay, EffectCards]);
</script>

<template>
  <RouterView />
</template>
