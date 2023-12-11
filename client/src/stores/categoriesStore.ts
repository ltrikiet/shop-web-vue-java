import { defineStore } from 'pinia';
import { ref } from 'vue';
import { API } from '@/services';
import type { CategoryRequest, CategoryResponse } from '@/services/category/types';

export const useCategoriesStore = defineStore('categoriesStore', () => {
  const categories = ref<CategoryResponse[]>([]);
  const activeCategories = ref<CategoryResponse[]>([]);

  const getCategories = async (): Promise<void> => {
    try {
      const { data } = await API.category.getCategorys();
      categories.value = data;
    } catch (error) {
      console.log(error);
    }
  };

  const getAllActiveCategories = async () => {
    const { data } = await API.category.getCategorys();
    activeCategories.value = data.filter((item) => item.active);
  };

  const createCategory = async (inputForm: CategoryRequest): Promise<void> => {
    try {
      const { data } = await API.category.createCategory(inputForm);
      categories.value.push(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCategory = async (id: number, inputForm: CategoryRequest): Promise<void> => {
    try {
      const { data } = await API.category.updateCategory(id, inputForm);
      const index = categories.value.findIndex((item) => item.id === id);
      categories.value.splice(index, 1, data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory = async (id: number): Promise<void> => {
    try {
      await API.category.deleteCategory(id);
      const index = categories.value.findIndex((item) => item.id === id);
      categories.value[index].active = false;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    categories,
    activeCategories,
    getCategories,
    getAllActiveCategories,
    createCategory,
    updateCategory,
    deleteCategory
  };
});
