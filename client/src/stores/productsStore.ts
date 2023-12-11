import { defineStore } from 'pinia';
import { ref } from 'vue';
import { API } from '@/services';
import type { ProductRequest, ProductResponse } from '@/services/product/types';

export const useProductsStore = defineStore('productsStore', () => {
  const products = ref<ProductResponse[]>([]);
  const activeProducts = ref<ProductResponse[]>([]);
  const newArrivalProducts = ref<ProductResponse[]>([]);
  const productDetails = ref<ProductResponse>();

  const getProducts = async (): Promise<void> => {
    try {
      const { data } = await API.product.getProducts();
      products.value = data;
    } catch (error) {
      console.log(error);
    }
  };

  const getAllActiveProducts = async () => {
    try {
      const { data } = await API.product.getAllActiveProducts();
      activeProducts.value = data;
    } catch (error) {
      console.log(error);
    }
  };

  const getLatestProduct = async (quantity: number) => {
    try {
      const { data } = await API.product.getLatestProducts(quantity);
      newArrivalProducts.value = data;
    } catch (error) {
      console.log(error);
    }
  };

  const getProductDetails = async (id: string) => {
    try {
      const { data } = await API.product.getProductDetails(id);
      productDetails.value = data;
    } catch (error) {
      console.log(error);
    }
  };

  const createProduct = async (inputForm: ProductRequest): Promise<void> => {
    try {
      const { data } = await API.product.createProduct(inputForm);
      products.value.push(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updaterProduct = async (id: number, inputForm: ProductRequest): Promise<void> => {
    try {
      const { data } = await API.product.updateProduct(id, inputForm);
      const index = products.value.findIndex((item) => item.id === id);
      products.value.splice(index, 1, data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id: number): Promise<void> => {
    try {
      await API.product.deleteProduct(id);
      const index = products.value.findIndex((item) => item.id === id);
      products.value[index].active = false;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    products,
    newArrivalProducts,
    activeProducts,
    productDetails,
    getProducts,
    getLatestProduct,
    getAllActiveProducts,
    getProductDetails,
    createProduct,
    updaterProduct,
    deleteProduct
  };
});
