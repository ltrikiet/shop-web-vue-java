import { ref } from 'vue';
import { defineStore } from 'pinia';
import { API } from '@/services';
import router from '@/router';
import type { SignInRequest, SignUpRequest } from '@/services/auth/types';

export const useAuthStore = defineStore('authStore', () => {
  const error = ref<string | null>(null);
  const loading = ref<boolean>(false);
  const userToken = ref<string>(sessionStorage.getItem('userToken') || '');

  const signIn = async (inputForm: SignInRequest): Promise<void> => {
    try {
      const { data: token } = await API.auth.signIn(inputForm);
      sessionStorage.setItem('userToken', token);
      userToken.value = token;
      router.push('/');
    } catch (err: any) {
      console.log(err);
      error.value = err?.message;
    }
  };

  const signUp = async (inputForm: SignUpRequest): Promise<void> => {
    try {
      const { status } = await API.auth.signUp(inputForm);
      if (status === 200) {
        return await signIn({ email: inputForm.email, password: inputForm.password });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    sessionStorage.removeItem('userToken');
    userToken.value = '';
    router.push('/');
  };

  return { userToken, error, loading, signIn, signUp, logout };
});
