import { defineStore, storeToRefs } from 'pinia';
import { ref, watchEffect } from 'vue';
import { useAuthStore } from './authStore';

export const useGlobalStore = defineStore('globalStore', () => {
  const authStore = useAuthStore();
  const { userToken } = storeToRefs(authStore);

  const isLogin = ref<boolean>(false);

  watchEffect(() => {
    if (userToken.value.length > 0) {
      isLogin.value = true;
    } else {
      isLogin.value = false;
    }
  });

  return { isLogin };
});
