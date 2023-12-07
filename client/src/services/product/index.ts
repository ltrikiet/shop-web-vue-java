import type { AxiosResponse } from 'axios';
import axiosClient from '@/utils/axiosClient';
import type { ProductRequest, ProductResponse } from './types';

const getProducts = async (): Promise<AxiosResponse<Array<ProductResponse>>> => {
  return await axiosClient.get('product');
};

const createProduct = async (inputForm: ProductRequest): Promise<AxiosResponse<ProductResponse>> => {
  return await axiosClient.post('product', inputForm);
};

const updateProduct = async (id: number, inputForm: ProductRequest): Promise<AxiosResponse<ProductResponse>> => {
  return await axiosClient.put(`product/${id}`, inputForm);
};

const deleteProduct = async (id: number): Promise<AxiosResponse<string>> => {
  return await axiosClient.delete(`product/${id}`);
};

export default {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
};
