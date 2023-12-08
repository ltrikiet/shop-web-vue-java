import { defineStore } from 'pinia';
import { ref } from 'vue';
import { API } from '@/services';
import type { CategoryRequest, CategoryResponse } from '@/services/category/types';
import type { ProductRequest, ProductResponse } from '@/services/product/types';
import type { SupplierRequest, SupplierResponse } from '@/services/supplier/types';
import type { UserRequest, UserResponse } from '@/services/user/types';

export const useManagementStore = defineStore('managementStore', () => {
  const users = ref<UserResponse[]>([]);
  const categories = ref<CategoryResponse[]>([]);
  const orders = ref<any[]>([]);
  const orderDetails = ref<Object>({});
  const products = ref<ProductResponse[]>([]);
  const suppliers = ref<SupplierResponse[]>([]);

  const getUsers = async (): Promise<void> => {
    try {
      const { data } = await API.user.getUsers();
      users.value = data;
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = async (inputForm: UserRequest): Promise<void> => {
    try {
      const { data } = await API.user.createUser(inputForm);
      users.value.push(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (id: number, inputForm: UserRequest): Promise<void> => {
    try {
      const { data } = await API.user.updateUser(id, inputForm);
      const index = users.value.findIndex((item) => item.id === id);
      users.value.splice(index, 1, data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id: number): Promise<void> => {
    try {
      await API.user.deleteUser(id);
      const index = users.value.findIndex((item) => item.id === id);
      users.value[index].active = false;
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async (): Promise<void> => {
    try {
      const { data } = await API.category.getCategorys();
      categories.value = data;
    } catch (error) {
      console.log(error);
    }
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

  const getProducts = async (): Promise<void> => {
    try {
      const { data } = await API.product.getProducts();
      products.value = data;
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

  const getOrders = async (): Promise<void> => {
    try {
      const { data } = await API.order.getOrders();
      orders.value = data;
    } catch (error) {
      console.log(error);
    }
  };

  const createOrder = async (inputForm: any): Promise<void> => {
    try {
      const { data } = await API.order.createOrder(inputForm);
      orders.value.push(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateOrder = async (id: number, inputForm: any): Promise<void> => {
    try {
      const { data } = await API.order.updateOrder(id, inputForm);
      const index = orders.value.findIndex((item) => item.id === id);
      orders.value.splice(index, 1, data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteOrder = async (id: number): Promise<void> => {
    try {
      await API.order.deleteOrder(id);
      const index = orders.value.findIndex((item) => item.id === id);
      orders.value.splice(index, 1);
    } catch (error) {
      console.log(error);
    }
  };

  const getOrderDetails = async (id: number): Promise<void> => {
    try {
      const { data } = await API.order.getOrderDetails(id);
      orderDetails.value = data;
    } catch (error) {
      console.log(error);
    }
  };

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
    // Users
    users,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    // Categories
    categories,
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    // Orders
    orders,
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder,
    getOrderDetails,
    // Products
    products,
    getProducts,
    createProduct,
    updaterProduct,
    deleteProduct,
    // Suppliers
    suppliers,
    getSuppliers,
    createSupplier,
    updaterSupplier,
    deleteSupplier
  };
});
