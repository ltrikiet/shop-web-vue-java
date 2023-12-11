import type { AxiosResponse } from 'axios';
import axiosClient from '@/utils/axiosClient';
import type { ProductRequest, ProductResponse } from './types';

const getProducts = async (): Promise<AxiosResponse<Array<ProductResponse>>> => {
  return await axiosClient.get('product');
};

const getAllActiveProducts = async (): Promise<AxiosResponse<Array<ProductResponse>>> => {
  return await axiosClient.get('product/active');
};

const getLatestProducts = async (quantity: number): Promise<AxiosResponse<Array<ProductResponse>>> => {
  return await axiosClient.get(`product/latest/${quantity}`);
};

const getProductDetails = async (id: string): Promise<AxiosResponse<ProductResponse>> => {
  return await axiosClient.get(`product/${id}`);
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
  getAllActiveProducts,
  getLatestProducts,
  getProductDetails,
  createProduct,
  updateProduct,
  deleteProduct
};
