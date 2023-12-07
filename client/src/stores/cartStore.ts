import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cartStore', () => {
  const isOpenCartSidebar = ref(false);

  const handleClickOpenCartSidebar = () => {
    isOpenCartSidebar.value = !isOpenCartSidebar.value;
  };

  return { isOpenCartSidebar, handleClickOpenCartSidebar };
});
