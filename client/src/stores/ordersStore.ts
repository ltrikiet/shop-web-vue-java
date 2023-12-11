import { defineStore } from 'pinia';
import { ref } from 'vue';
import { API } from '@/services';

export const useOrdersStore = defineStore('ordersStore', () => {
  const orders = ref<any[]>([]);
  const orderDetails = ref<Object>({});

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

  return {
    orders,
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder,
    getOrderDetails
  };
});
