import categoryService from './category';
import userService from './user';
import fileService from './file';
import orderService from './order';
import productService from './product';
import supplierService from './supplier';
import authService from './auth';

export const API = {
  user: userService,
  supplier: supplierService,
  category: categoryService,
  product: productService,
  order: orderService,
  file: fileService,
  auth: authService
};
