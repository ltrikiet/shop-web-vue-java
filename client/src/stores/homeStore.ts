import { ref } from 'vue';
import { defineStore } from 'pinia';
import { API } from '@/services';
import type { CategoryResponse } from '@/services/category/types';

export const useCartStore = defineStore('homeStore', () => {
  const categorys = ref<CategoryResponse[]>([]);

  const getAllCategorys = async () => {
    const { data } = await API.category.getCategorys();
    categorys.value = data;
  };

  return { categorys, getAllCategorys };
});
