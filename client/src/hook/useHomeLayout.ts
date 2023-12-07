import { ref, watchEffect } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/authStore';
import { useCartStore } from '@/stores/cartStore';
import router from '@/router';

const useHomeLayout = () => {
  const authStore = useAuthStore();
  const cartStore = useCartStore();
  const { userToken } = storeToRefs(authStore);
  const { isOpenCartSidebar } = storeToRefs(cartStore);

  const isLogin = ref(false);

  watchEffect(() => {
    if (userToken.value.length > 0) {
      isLogin.value = true;
    } else {
      isLogin.value = false;
    }
  });

  const handleCartIconClick = () => {
    cartStore.handleClickOpenCartSidebar();
  };

  const handleAccountIconClick = () => {
    if (isLogin.value) {
      router.push('/admin/home');
    } else {
      router.push('/login');
    }
  };

  return { isLogin, isOpenCartSidebar, handleCartIconClick, handleAccountIconClick };
};

export default useHomeLayout;
