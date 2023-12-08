import { ref } from 'vue';
import { defineStore } from 'pinia';
import { API } from '@/services';
import type { CategoryResponse } from '@/services/category/types';
import type { ProductResponse } from '@/services/product/types';

export const useHomeStore = defineStore('homeStore', () => {
  const categories = ref<CategoryResponse[]>([]);
  const products = ref<ProductResponse[]>([]);

  const getAllActiveCategories = async () => {
    const { data } = await API.category.getCategorys();
    categories.value = data.filter((item) => item.active);
  };

  // const getTenNewProducts = async () => {
  //   const { data} = await API.product.
  // }

  return { categories, getAllActiveCategories };
});
