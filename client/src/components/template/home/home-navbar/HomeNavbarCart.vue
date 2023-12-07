<script setup lang="ts">
import useHomeLayout from '@/hook/useHomeLayout';

const { isOpenCartSidebar } = useHomeLayout();
</script>
<template>
  <v-navigation-drawer location="right" v-model="isOpenCartSidebar" temporary> Something </v-navigation-drawer>
</template>
@/hook/useHomeLayout
