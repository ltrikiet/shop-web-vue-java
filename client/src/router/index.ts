import { storeToRefs } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import adminRoutes from './admin.routes';
import { useAuthStore } from '@/stores/authStore';
import { isAdminRole } from '@/helpers/token.helper';

declare module 'vue-router' {
  interface RouteMeta {
    requiredAuthorization?: boolean;
    roles?: string[];
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/page/home/home/HomePage.vue')
    },
    {
      path: '/product-list',
      name: 'product-list',
      component: () => import('@/components/page/home/product-list/ProductList.vue')
    },
    {
      path: '/product-details',
      name: 'product-details',
      component: () => import('@/components/page/home/product-details/ProductDetails.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/page/login/UserLogin.vue')
    },
    { ...adminRoutes },
    // catch all redirect to 404 page
    {
      path: '/:pathMatch(.*)*',
      name: 'page-not-found',
      component: () => import('@/components/page/page-not-found/PageNotFound.vue')
    }
  ]
});

router.beforeEach((to) => {
  const requiredAuthorization = to.matched.some((x) => x.meta.requiredAuthorization);

  const authStore = useAuthStore();
  const { userToken } = storeToRefs(authStore);

  if (requiredAuthorization && !userToken.value) {
    return { name: 'login' };
  }

  if (userToken.value) {
    if (!isAdminRole(userToken.value || '') && to.matched.some((x) => x.meta.roles?.includes('admin'))) {
      return { name: 'login' };
    }
  }
});

export default router;
