<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import AdminTemplate from '@/layouts/admin/AdminTemplate.vue';
import MyTableData from '@/components/table-data/MyTableData.vue';
import MyDialogForm from '@/components/dialog-form/MyDialogForm.vue';
import { useManagementStore } from '@/stores/managementStore';
import useManagement, { ManagementType } from '@/hooks/useManagement';
import { formField, tableHeaders, validationSchema } from './constant';

const managementStore = useManagementStore();
const { categorys } = storeToRefs(managementStore);

onMounted(async () => await managementStore.getCategorys());
const {
  showDialog,
  isEdit,
  selectedItem,
  handleClickAdd,
  handleClickEdit,
  handleClickDelete,
  handleCloseDialog,
  handleSubmitForm
} = useManagement(ManagementType.CATEGORIES);
</script>
<template>
  <admin-template>
    <my-table-data
      title="Categories Management"
      add-button-title="Add category"
      :data="categorys"
      :table-headers="tableHeaders"
      :handle-click-add="handleClickAdd"
      :handle-click-edit="handleClickEdit"
      :handle-click-delete="handleClickDelete"
    />
    <my-dialog-form
      title="Category Form"
      image-key-for-preview-on-edit="picture"
      :form-field="formField"
      :initial-value="selectedItem"
      :validation-schema="validationSchema"
      :is-edit="isEdit"
      :is-show-dialog="showDialog"
      :handle-close-dialog="handleCloseDialog"
      :handle-submit-form="handleSubmitForm"
    />
  </admin-template>
</template>
