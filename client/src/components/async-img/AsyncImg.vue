<script setup lang="ts">
import { API } from '@/services';
import { onUpdated } from 'vue';
import { onMounted, ref } from 'vue';

interface AsyncImgProps {
  path?: string;
}
const props = defineProps<AsyncImgProps>();
const asyncImgSrc = ref();

onMounted(async () => {
  if (props.path) {
    const result = await API.file.getImage(props.path);
    asyncImgSrc.value = result;
  }
});

onUpdated(async () => {
  if (props.path) {
    const result = await API.file.getImage(props.path);
    asyncImgSrc.value = result;
  }
});
</script>
<template>
  <v-img cover :src="asyncImgSrc" />
</template>
