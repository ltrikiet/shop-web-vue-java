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
      component: () => import('@/components/page/admin/home/AdminHome.vue')
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
          component: () => import('@/components/page/admin/management/users/UsersManagement.vue')
        },
        {
          path: 'products',
          name: 'products-management',
          meta: {
            requiredAuthorization: true,
            roles: ['admin']
          },
          component: () => import('@/components/page/admin/management/products/ProductsManagement.vue')
        },
        {
          path: 'orders',
          name: 'orders-management',
          meta: {
            requiredAuthorization: true,
            roles: ['admin']
          },
          component: () => import('@/components/page/admin/management/orders/OrdersManagement.vue')
        },
        {
          path: 'suppliers',
          name: 'suppliers-management',
          meta: {
            requiredAuthorization: true,
            roles: ['admin']
          },
          component: () => import('@/components/page/admin/management/suppliers/SuppliersManagement.vue')
        },
        {
          path: 'categorys',
          name: 'categorys-management',
          meta: {
            requiredAuthorization: true,
            roles: ['admin']
          },
          component: () => import('@/components/page/admin/management/categorys/CategorysManagement.vue')
        }
      ]
    }
  ]
};
