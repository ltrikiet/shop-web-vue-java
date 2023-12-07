export const navList = [
  {
    icon: 'mdi-home-city',
    title: 'Home',
    value: 'home',
    to: '/admin/home'
  },
  {
    icon: 'mdi-folder',
    title: 'Management',
    value: 'management',
    children: [
      {
        title: 'Users',
        value: 'usersManagement',
        to: '/admin/management/users'
      },
      {
        title: 'Products',
        value: 'productsManagement',
        to: '/admin/management/products'
      },
      {
        title: 'Orders',
        value: 'ordersManagement',
        to: '/admin/management/orders'
      },
      {
        title: 'Categorys',
        value: 'categorysManagement',
        to: '/admin/management/categorys'
      },
      {
        title: 'Suppliers',
        value: 'suppliersManagement',
        to: '/admin/management/suppliers'
      }
    ]
  }
];
