import { defineStore } from 'pinia';
import { ref } from 'vue';
import { API } from '@/services';
import type { SupplierRequest, SupplierResponse } from '@/services/supplier/types';

export const useSuppliersStore = defineStore('suppliersStore', () => {
  const suppliers = ref<SupplierResponse[]>([]);

  const getSuppliers = async (): Promise<void> => {
    try {
      const { data } = await API.supplier.getSuppliers();
      suppliers.value = data;
    } catch (error) {
      console.log(error);
    }
  };

  const createSupplier = async (inputForm: SupplierRequest): Promise<void> => {
    try {
      const { data } = await API.supplier.createSupplier(inputForm);
      suppliers.value.push(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updaterSupplier = async (id: number, inputForm: SupplierRequest): Promise<void> => {
    try {
      const { data } = await API.supplier.updateSupplier(id, inputForm);
      const index = suppliers.value.findIndex((item) => item.id === id);
      suppliers.value.splice(index, 1, data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSupplier = async (id: number): Promise<void> => {
    try {
      await API.supplier.deleteSupplier(id);
      const index = suppliers.value.findIndex((item) => item.id === id);
      suppliers.value[index].active = false;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    suppliers,
    getSuppliers,
    createSupplier,
    updaterSupplier,
    deleteSupplier
  };
});
