import axiosClient from '@/utils/axiosClient';

const getOrders = async () => {
  return await axiosClient.get('order');
};

const createOrder = async (inputForm: any) => {
  return await axiosClient.post('order', inputForm);
};

const updateOrder = async (id: number, inputForm: any) => {
  return await axiosClient.put(`order/${id}`, inputForm);
};

const deleteOrder = async (id: number) => {
  return await axiosClient.delete(`order/${id}`);
};

const getOrderDetails = async (id: number) => {
  return await axiosClient.get(`order/${id}/details`);
};

export default {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  getOrderDetails
};
