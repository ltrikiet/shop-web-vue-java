import type { CategoryResponse } from '../category/types';
import type { SupplierResponse } from '../supplier/types';

export type ProductResponse = {
  id: number;
  fullName: string;
  description: string;
  picture: string;
  supplier: SupplierResponse;
  category: CategoryResponse;
  price: number;
  stocks: number;
  discount: number;
  discountAvailable: boolean;
  ranking: number;
  notes: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ProductRequest = ProductResponse;
