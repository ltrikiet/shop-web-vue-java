export type SupplierResponse = {
  id: number;
  fullName: string;
  description: string;
  active: boolean;
  address: string;
  phone: string;
  email: string;
  url: string;
  logo: string;
  createdAt: string;
  updatedAt: string;
};

export type SupplierRequest = SupplierResponse;
