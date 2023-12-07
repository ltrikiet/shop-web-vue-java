export type UserResponse = {
  id: number;
  fullName: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  password: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UserRequest = UserResponse;
