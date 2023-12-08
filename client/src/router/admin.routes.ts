export default {
  path: '/admin',
  children: [
    {
      path: 'home',
      name: 'admin-home',
      meta: {
        requiredAuthorization: true,
        roles: ['admin']
      },
      component: () => import('@/pages/admin/home/AdminHome.vue')
    },
    {
      path: 'management',
      name: 'management',
      children: [
        {
          path: 'users',
          name: 'users-management',
          meta: {
            requiredAuthorization: true,
            roles: ['admin']
          },
          component: () => import('@/pages/admin/management/users/UsersManagement.vue')
        },
        {
          path: 'products',
          name: 'products-management',
          meta: {
            requiredAuthorization: true,
            roles: ['admin']
          },
          component: () => import('@/pages/admin/management/products/ProductsManagement.vue')
        },
        {
          path: 'orders',
          name: 'orders-management',
          meta: {
            requiredAuthorization: true,
            roles: ['admin']
          },
          component: () => import('@/pages/admin/management/orders/OrdersManagement.vue')
        },
        {
          path: 'suppliers',
          name: 'suppliers-management',
          meta: {
            requiredAuthorization: true,
            roles: ['admin']
          },
          component: () => import('@/pages/admin/management/suppliers/SuppliersManagement.vue')
        },
        {
          path: 'categories',
          name: 'categories-management',
          meta: {
            requiredAuthorization: true,
            roles: ['admin']
          },
          component: () => import('@/pages/admin/management/categories/CategoriesManagement.vue')
        }
      ]
    }
  ]
};
