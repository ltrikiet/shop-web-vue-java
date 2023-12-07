import type { AxiosResponse } from 'axios';
import axiosClient from '@/utils/axiosClient';
import type { UserRequest, UserResponse } from './types';

const getUsers = async (): Promise<AxiosResponse<Array<UserResponse>>> => {
  return await axiosClient.get('user');
};

const createUser = async (inputForm: UserRequest): Promise<AxiosResponse<UserResponse>> => {
  return await axiosClient.post('user', inputForm);
};

const updateUser = async (id: number, inputForm: UserRequest): Promise<AxiosResponse<UserResponse>> => {
  return await axiosClient.put(`user/${id}`, inputForm);
};

const deleteUser = async (id: number): Promise<AxiosResponse<string>> => {
  return await axiosClient.delete(`user/${id}`);
};

export default {
  getUsers,
  createUser,
  updateUser,
  deleteUser
};
