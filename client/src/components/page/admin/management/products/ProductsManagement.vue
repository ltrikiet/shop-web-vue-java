<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import AdminTemplate from '@/components/template/admin/AdminTemplate.vue';
import MyTableData from '@/components/common/table-data/MyTableData.vue';
import MyDialogForm from '@/components/common/dialog-form/MyDialogForm.vue';
import useManagement, { ManagementType } from '@/hook/useManagement';
import { useManagementStore } from '@/stores/managementStore';
import { formField, validationSchema } from './constant';

const managementStore = useManagementStore();
const { categorys, suppliers, products } = storeToRefs(managementStore);

onMounted(async () => {
  await managementStore.getProducts();
  await managementStore.getSuppliers();
  await managementStore.getCategorys();
});

const {
  showDialog,
  isEdit,
  selectedItem,
  handleClickAdd,
  handleClickEdit,
  handleClickDelete,
  handleCloseDialog,
  handleSubmitForm
} = useManagement(ManagementType.PRODUCTS);
</script>
<template>
  <admin-template>
    <my-table-data
      :data="products"
      :title="'Products Management'"
      :add-button-title="'Add product'"
      :handle-click-add="handleClickAdd"
      :handle-click-edit="handleClickEdit"
      :handle-click-delete="handleClickDelete"
    />
    <my-dialog-form
      :title="'Product Form'"
      :image-key-for-preview-on-edit="'picture'"
      :form-field="formField(suppliers, categorys)"
      :is-edit="isEdit"
      :initial-value="selectedItem"
      :is-show-dialog="showDialog"
      :handle-close-dialog="handleCloseDialog"
      :handle-submit-form="handleSubmitForm"
    />
  </admin-template>
</template>
