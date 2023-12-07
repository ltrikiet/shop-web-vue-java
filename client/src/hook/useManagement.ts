import { ref } from 'vue';
import { getCurrentISOString } from '@/helpers/datetime.helpler';
import { API } from '@/services';
import { useManagementStore } from '@/stores/managementStore';

export enum ManagementType {
  CATEGORYS = 'categorys',
  USERS = 'users',
  ORDERS = 'orders',
  PRODUCTS = 'products',
  SUPPLIERS = 'suppliers'
}

const IMAGE_KEY = 'picture';
const managementStore = useManagementStore();

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
    return updateImageAndGetPath(inputForm, `${ManagementType.CATEGORYS}/${inputForm.fullName}`).then((result) => {
      managementStore.updateCategory(selectedItem.id, { ...addBasicDataToUpdate(inputForm), picture: result?.data });
    });
  }

  if (inputForm[IMAGE_KEY] && isNewUploadImage(inputForm) && !isEdit) {
    return updateImageAndGetPath(inputForm, `${ManagementType.CATEGORYS}/${inputForm.fullName}`).then((result) => {
      managementStore.createCategory({ ...addBasicDataToCreate(inputForm), picture: result?.data });
    });
  }

  if (isEdit) {
    return managementStore.updateCategory(selectedItem.id, addBasicDataToUpdate(inputForm));
  }

  return managementStore.createCategory(addBasicDataToCreate(inputForm));
};

const handleCustomerSubmit = (
  isEdit: boolean,
  selectedItem: { [key: string]: any },
  inputForm: { [key: string]: any }
) => {
  if (isEdit) {
    return managementStore.updateUser(selectedItem.id, addBasicDataToUpdate(inputForm));
  }
  return managementStore.createUser(addBasicDataToCreate(inputForm));
};

const handleProductSumbit = (
  isEdit: boolean,
  selectedItem: { [key: string]: any },
  inputForm: { [key: string]: any }
) => {
  if (inputForm[IMAGE_KEY] && isNewUploadImage(inputForm) && isEdit) {
    return updateImageAndGetPath(inputForm, `${ManagementType.PRODUCTS}/${inputForm.fullName}`).then((result) => {
      managementStore.updaterProduct(selectedItem.id, { ...addBasicDataToUpdate(inputForm), picture: result?.data });
    });
  }

  if (inputForm[IMAGE_KEY] && isNewUploadImage(inputForm) && !isEdit) {
    return updateImageAndGetPath(inputForm, `${ManagementType.PRODUCTS}/${inputForm.fullName}`).then((result) => {
      managementStore.createProduct({ ...addBasicDataToCreate(inputForm), picture: result?.data });
    });
  }

  if (isEdit) {
    return managementStore.updaterProduct(selectedItem.id, addBasicDataToUpdate(inputForm));
  }

  return managementStore.createProduct(addBasicDataToCreate(inputForm));
};

const handleSupplierSubmit = (
  isEdit: boolean,
  selectedItem: { [key: string]: any },
  inputForm: { [key: string]: any }
) => {
  if (inputForm[IMAGE_KEY] && isNewUploadImage(inputForm) && isEdit) {
    return updateImageAndGetPath(inputForm, `${ManagementType.SUPPLIERS}/${inputForm.fullName}`).then((result) => {
      managementStore.updaterSupplier(selectedItem.id, { ...addBasicDataToUpdate(inputForm), picture: result?.data });
    });
  }

  if (inputForm[IMAGE_KEY] && isNewUploadImage(inputForm) && !isEdit) {
    return updateImageAndGetPath(inputForm, `${ManagementType.SUPPLIERS}/${inputForm.fullName}`).then((result) => {
      managementStore.createSupplier({ ...addBasicDataToCreate(inputForm), picture: result?.data });
    });
  }

  if (isEdit) {
    return managementStore.updaterSupplier(selectedItem.id, addBasicDataToUpdate(inputForm));
  }

  return managementStore.createSupplier(addBasicDataToCreate(inputForm));
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
      case ManagementType.CATEGORYS:
        managementStore.deleteCategory(props.item.id);
        break;
      case ManagementType.USERS:
        managementStore.deleteUser(props.item.id);
        break;
      case ManagementType.ORDERS:
        managementStore.deleteOrder(props.item.id);
        break;
      case ManagementType.PRODUCTS:
        managementStore.deleteProduct(props.item.id);
        break;
      case ManagementType.SUPPLIERS:
        managementStore.deleteSupplier(props.item.id);
        break;
    }
  };

  const handleCloseDialog = () => {
    showDialog.value = false;
    selectedItem.value = {};
    isEdit.value = false;
  };

  const handleSubmitForm = (props: any): void => {
    console.log(props);
    switch (type) {
      case ManagementType.CATEGORYS:
        handleCategorySubmit(isEdit.value, selectedItem.value, props);
        console.log(props);
        break;

      case ManagementType.USERS:
        handleCustomerSubmit(isEdit.value, selectedItem.value, props);
        break;

      case ManagementType.ORDERS:
        if (isEdit.value) {
          managementStore.updateOrder(selectedItem.value.id, addBasicDataToUpdate(props));
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
