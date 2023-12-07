<script setup lang="ts">
defineProps({
  level: { type: Number, default: 0 }
})
</script>
<template>
  <div class="my-5 flex relative mx-2">
    <div class="bg-white h-3" :style="{ width: `${level * 10}%` }"></div>
    <div class="flex justify-between absolute h-3 w-full">
      <template v-for="(n, index) of 11" :key="n">
        <p v-if="index !== level" class="border-l-4 border-x-gray-600 w-1 h-3" />
        <p
          v-if="index === level"
          class="w-9 h-9 relative top-[-12px] left-[1px] border-4 border-gray-600 rounded-full flex justify-center items-center bg-white font-medium text-lg"
        >
          {{ level }}
        </p>
      </template>
    </div>
  </div>
</template>
