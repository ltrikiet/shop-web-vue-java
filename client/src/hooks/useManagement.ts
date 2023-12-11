import { ref } from 'vue';
import { getCurrentISOString } from '@/helpers/datetime.helpler';
import { API } from '@/services';
import { removeSpecialSympolForPath } from '@/helpers/string.helper';
import { useUsersStore } from '@/stores/usersStore';
import { useSuppliersStore } from '@/stores/suppliersStore';
import { useOrdersStore } from '@/stores/ordersStore';
import { useProductsStore } from '@/stores/productsStore';
import { useCategoriesStore } from '@/stores/categoriesStore';

export enum ManagementType {
  CATEGORIES = 'categories',
  USERS = 'users',
  ORDERS = 'orders',
  PRODUCTS = 'products',
  SUPPLIERS = 'suppliers'
}

const usersStore = useUsersStore();
const suppliersStore = useSuppliersStore();
const ordersStores = useOrdersStore();
const productsStore = useProductsStore();
const categoriesStore = useCategoriesStore();

const IMAGE_KEY = 'picture';
const addBasicDataToCreate = (props: any) => ({
  ...props,
  createdAt: getCurrentISOString(),
  updatedAt: getCurrentISOString()
});

const addBasicDataToUpdate = (props: any) => ({
  ...props,
  updatedAt: getCurrentISOString()
});

const updateImageAndGetPath = async (props: any, customPath?: string) => {
  const result = await API.file.postImage(props[IMAGE_KEY], customPath);
  return result;
};

const isNewUploadImage = (inputForm: { [key: string]: any }) =>
  inputForm[IMAGE_KEY] !== undefined && typeof inputForm[IMAGE_KEY] !== 'string';

const handleCategorySubmit = (
  isEdit: boolean,
  selectedItem: { [key: string]: any },
  inputForm: { [key: string]: any }
) => {
  if (inputForm[IMAGE_KEY] && isNewUploadImage(inputForm) && isEdit) {
    return updateImageAndGetPath(
      inputForm,
      `${ManagementType.CATEGORIES}/${removeSpecialSympolForPath(inputForm.fullName)}`
    ).then((result) => {
      categoriesStore.updateCategory(selectedItem.id, { ...addBasicDataToUpdate(inputForm), picture: result?.data });
    });
  }

  if (inputForm[IMAGE_KEY] && isNewUploadImage(inputForm) && !isEdit) {
    return updateImageAndGetPath(
      inputForm,
      `${ManagementType.CATEGORIES}/${removeSpecialSympolForPath(inputForm.fullName)}`
    ).then((result) => {
      categoriesStore.createCategory({ ...addBasicDataToCreate(inputForm), picture: result?.data });
    });
  }

  if (isEdit) {
    return categoriesStore.updateCategory(selectedItem.id, addBasicDataToUpdate(inputForm));
  }

  return categoriesStore.createCategory(addBasicDataToCreate(inputForm));
};

const handleCustomerSubmit = (
  isEdit: boolean,
  selectedItem: { [key: string]: any },
  inputForm: { [key: string]: any }
) => {
  if (isEdit) {
    return usersStore.updateUser(selectedItem.id, addBasicDataToUpdate(inputForm));
  }
  return usersStore.createUser(addBasicDataToCreate(inputForm));
};

const handleProductSumbit = (
  isEdit: boolean,
  selectedItem: { [key: string]: any },
  inputForm: { [key: string]: any }
) => {
  if (inputForm[IMAGE_KEY] && isNewUploadImage(inputForm) && isEdit) {
    return updateImageAndGetPath(
      inputForm,
      `${ManagementType.PRODUCTS}/${removeSpecialSympolForPath(inputForm.fullName)}`
    ).then((result) => {
      productsStore.updaterProduct(selectedItem.id, { ...addBasicDataToUpdate(inputForm), picture: result?.data });
    });
  }

  if (inputForm[IMAGE_KEY] && isNewUploadImage(inputForm) && !isEdit) {
    return updateImageAndGetPath(
      inputForm,
      `${ManagementType.PRODUCTS}/${removeSpecialSympolForPath(inputForm.fullName)}`
    ).then((result) => {
      productsStore.createProduct({ ...addBasicDataToCreate(inputForm), picture: result?.data });
    });
  }

  if (isEdit) {
    return productsStore.updaterProduct(selectedItem.id, addBasicDataToUpdate(inputForm));
  }

  return productsStore.createProduct(addBasicDataToCreate(inputForm));
};

const handleSupplierSubmit = (
  isEdit: boolean,
  selectedItem: { [key: string]: any },
  inputForm: { [key: string]: any }
) => {
  if (inputForm[IMAGE_KEY] && isNewUploadImage(inputForm) && isEdit) {
    return updateImageAndGetPath(
      inputForm,
      `${ManagementType.SUPPLIERS}/${removeSpecialSympolForPath(inputForm.fullName)}`
    ).then((result) => {
      suppliersStore.updaterSupplier(selectedItem.id, { ...addBasicDataToUpdate(inputForm), picture: result?.data });
    });
  }

  if (inputForm[IMAGE_KEY] && isNewUploadImage(inputForm) && !isEdit) {
    return updateImageAndGetPath(
      inputForm,
      `${ManagementType.SUPPLIERS}/${removeSpecialSympolForPath(inputForm.fullName)}`
    ).then((result) => {
      suppliersStore.createSupplier({ ...addBasicDataToCreate(inputForm), picture: result?.data });
    });
  }

  if (isEdit) {
    return suppliersStore.updaterSupplier(selectedItem.id, addBasicDataToUpdate(inputForm));
  }

  return suppliersStore.createSupplier(addBasicDataToCreate(inputForm));
};

const useManagement = (type: ManagementType) => {
  const showDialog = ref(false);
  const isEdit = ref(false);
  const selectedItem = ref<any>({});

  const handleClickAdd = () => {
    showDialog.value = true;
  };

  const handleClickEdit = (props: any) => {
    selectedItem.value = props.item;
    showDialog.value = true;
    isEdit.value = true;
  };

  const handleClickDelete = (props: any) => {
    switch (type) {
      case ManagementType.CATEGORIES:
        categoriesStore.deleteCategory(props.item.id);
        break;
      case ManagementType.USERS:
        usersStore.deleteUser(props.item.id);
        break;
      case ManagementType.ORDERS:
        ordersStores.deleteOrder(props.item.id);
        break;
      case ManagementType.PRODUCTS:
        productsStore.deleteProduct(props.item.id);
        break;
      case ManagementType.SUPPLIERS:
        suppliersStore.deleteSupplier(props.item.id);
        break;
    }
  };

  const handleCloseDialog = () => {
    showDialog.value = false;
    selectedItem.value = {};
    isEdit.value = false;
  };

  const handleSubmitForm = (props: any): void => {
    switch (type) {
      case ManagementType.CATEGORIES:
        handleCategorySubmit(isEdit.value, selectedItem.value, props);
        break;

      case ManagementType.USERS:
        handleCustomerSubmit(isEdit.value, selectedItem.value, props);
        break;

      case ManagementType.ORDERS:
        if (isEdit.value) {
          ordersStores.updateOrder(selectedItem.value.id, addBasicDataToUpdate(props));
        }
        break;

      case ManagementType.PRODUCTS:
        handleProductSumbit(isEdit.value, selectedItem.value, props);
        break;

      case ManagementType.SUPPLIERS:
        handleSupplierSubmit(isEdit.value, selectedItem.value, props);
        break;
    }
    showDialog.value = false;
  };

  return {
    showDialog,
    isEdit,
    selectedItem,
    handleClickAdd,
    handleClickEdit,
    handleClickDelete,
    handleCloseDialog,
    handleSubmitForm
  };
};
export default useManagement;
