<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import AdminTemplate from '@/layouts/admin/AdminTemplate.vue';
import MyTableData from '@/components/table-data/MyTableData.vue';
import MyDialogForm from '@/components/dialog-form/MyDialogForm.vue';
import useManagement, { ManagementType } from '@/hooks/useManagement';
import { useManagementStore } from '@/stores/managementStore';
import { formField, validationSchema, tableHeaders } from './constant';

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
      :table-headers="tableHeaders"
      :handle-click-add="handleClickAdd"
      :handle-click-edit="handleClickEdit"
      :handle-click-delete="handleClickDelete"
    />
    <my-dialog-form
      :title="'Product Form'"
      :image-key-for-preview-on-edit="'picture'"
      :form-field="formField(suppliers, categorys)"
      :validation-schema="validationSchema"
      :is-edit="isEdit"
      :initial-value="selectedItem"
      :is-show-dialog="showDialog"
      :handle-close-dialog="handleCloseDialog"
      :handle-submit-form="handleSubmitForm"
    />
  </admin-template>
</template>
