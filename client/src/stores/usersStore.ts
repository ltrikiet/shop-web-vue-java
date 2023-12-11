import { defineStore } from 'pinia';
import { ref } from 'vue';
import { API } from '@/services';
import type { UserRequest, UserResponse } from '@/services/user/types';

export const useUsersStore = defineStore('usersStore', () => {
  const users = ref<UserResponse[]>([]);

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

  return {
    users,
    getUsers,
    createUser,
    updateUser,
    deleteUser
  };
});
