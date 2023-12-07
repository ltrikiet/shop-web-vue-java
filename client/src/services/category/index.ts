import type { AxiosResponse } from 'axios';
import axiosClient from '@/utils/axiosClient';
import type { CategoryRequest, CategoryResponse } from './types';

const getCategorys = async (): Promise<AxiosResponse<Array<CategoryResponse>>> => {
  return await axiosClient.get('category');
};

const createCategory = async (inputForm: CategoryRequest): Promise<AxiosResponse<CategoryResponse>> => {
  return await axiosClient.post('category', inputForm);
};

const updateCategory = async (id: number, inputForm: CategoryRequest): Promise<AxiosResponse<CategoryResponse>> => {
  return await axiosClient.put(`category/${id}`, inputForm);
};

const deleteCategory = async (id: number): Promise<AxiosResponse<string>> => {
  return await axiosClient.delete(`category/${id}`);
};

export default {
  getCategorys,
  createCategory,
  updateCategory,
  deleteCategory
};
