export type CategoryResponse = {
  id: number;
  fullName: string;
  description: string;
  picture: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
};

export type CategoryRequest = CategoryResponse;
