export type OrderDetails = {
  productId: number;
  price: number;
  quantity: number;
  discount: number;
  total: number;
};

export type OrderRequest = {
  id: number;
  userId: string;
  paymentMethod: string;
  requiredDate: string;
  paymentDate: string;
  paid: boolean;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  orderDetails: OrderDetails[];
};
