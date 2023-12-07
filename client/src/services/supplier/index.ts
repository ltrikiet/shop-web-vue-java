import axiosClient from '@/utils/axiosClient';
import type { AxiosResponse } from 'axios';
import type { SupplierRequest, SupplierResponse } from './types';

const getSuppliers = async (): Promise<AxiosResponse<Array<SupplierResponse>>> => {
  return await axiosClient.get('supplier');
};

const createSupplier = async (inputForm: SupplierRequest): Promise<AxiosResponse<SupplierResponse>> => {
  return await axiosClient.post('supplier', inputForm);
};

const updateSupplier = async (id: number, inputForm: SupplierRequest): Promise<AxiosResponse<SupplierResponse>> => {
  return await axiosClient.put(`supplier/${id}`, inputForm);
};

const deleteSupplier = async (id: number): Promise<AxiosResponse<string>> => {
  return await axiosClient.delete(`supplier/${id}`);
};

export default {
  getSuppliers,
  createSupplier,
  updateSupplier,
  deleteSupplier
};
